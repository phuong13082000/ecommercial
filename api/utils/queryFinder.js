class queryFinder {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i",
            },
        } : {};

        this.query = this.query.find({ ...keyword });

        return this;
    }

    filter() {
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach((element) => delete this.queryStr[element]);

        const queryStr = JSON.stringify(this.queryStr).replace(/\b(gt|gte|lt|lte)\b/g, (element) => `$${element}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skipProducts = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skipProducts);

        return this;
    }
}

module.exports = queryFinder