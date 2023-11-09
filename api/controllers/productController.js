const ProductModel = require("../models/productModel");
const queryFinder = require("../utils/queryFinder");
const cloudinary = require("cloudinary");

exports.getAllProduct = async (req, res) => {
    try {
        const apiFeature = new queryFinder(ProductModel.find(), req.query)
            .search()
            .filter();
        let products = await apiFeature.query.clone();

        res.send({ products: products });
    } catch (err) {
        res.send({ error: err.message })
    }
};

exports.getProductById = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await ProductModel.findOne({ _id: id });

        res.send({ product: product });
    } catch (err) {
        res.send({ error: err.message })
    }
}

exports.createProduct = async (req, res) => {
    const { images } = req.body;

    const processedImages = typeof images === "string" ? [images] : images;

    const imagesLink = await Promise.all(processedImages.map(async (image) => {
        const result = await cloudinary.v2.uploader.upload(image, { folder: "products" });
        return { public_id: result.public_id, url: result.secure_url };
    }));

    req.body.images = imagesLink;

    try {
        await ProductModel.create(req.body);

        res.send({ msg: "create successfully" });
    } catch (err) {
        res.send({ error: err.message })
    }
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;

    try {
        let product = await ProductModel.findById(id);

        if (!product) return res.send({ msg: "product not found" });

        let images = req.body.images || [];

        if (images.length === 0) {

            // Update the product directly using the req.body properties
            await ProductModel.findByIdAndUpdate({ _id: id }, {
                name: req.body.name,
                details: req.body.details,
                price: req.body.price,
                category: req.body.category
            });

            return res.send({ msg: "update successfully" });
        }

        if (Array.isArray(images)) {
            // Loop through the product images and destroy them on cloudinary
            for (let i = 0; i < images.length; i++) {
                if (product.images && product.images[i]) {
                    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
                }
            }

            const imagesLink = [];
            // Upload new images to cloudinary and collect the new image links
            for (let i = 0; i < images.length; i++) {
                const result = await cloudinary.v2.uploader.upload(images[i], { folder: "products" });
                imagesLink.push({ public_id: result.public_id, url: result.secure_url });
            }

            req.body.images = imagesLink;

            // update the product object using req.body properties
            Object.assign(product, req.body);

            // save the updated product 
            await product.save();

            return res.send({ msg: "update successfully" });
        }
    } catch (err) {
        res.send({ error: err.message })
    }
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        let product = await ProductModel.findById(id);
        if (!product) return res.send({ msg: "product not found" });

        for (let i = 0; i < product.images.length; i++) {
            await cloudinary.v2.uploader.destroy(product.images[i].public_id);
        }

        await ProductModel.findByIdAndDelete({ _id: id })

        res.send({ msg: "delete successfully" });
    } catch (err) {
        res.send({ error: err.message })
    }
}
