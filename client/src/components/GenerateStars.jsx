export const GenerateStars = (star) => {
    const fullStars = Math.floor(star);
    const halfStar = star % 1 === 0.5;
    const starsArray = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsArray.push(<i key={i} className="fas fa-star m-[0_.3rem] text-[1.7rem] text-orange"></i>);
        } else if (halfStar && i === fullStars + 1) {
            starsArray.push(<i key={i} className="fas fa-star-half-alt m-[0_.3rem] text-[1.7rem] text-orange"></i>);
        } else {
            starsArray.push(<i key={i} className="far fa-star m-[0_.3rem] text-[1.7rem] text-orange"></i>);
        }
    }

    return <>{starsArray}</>
}

