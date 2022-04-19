import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
    <ContentLoader
        speed={2}
        // width={280}
        // height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="pizza-block"
    >
        <circle cx="137" cy="120" r="120" />
        <rect x="0" y="267" rx="3" ry="3" width="280" height="24" />
        <rect x="0" y="314" rx="6" ry="6" width="280" height="84" />
        <rect x="0" y="420" rx="3" ry="3" width="89" height="27" />
        <rect x="125" y="414" rx="30" ry="30" width="151" height="44" />
    </ContentLoader>
)

export default LoadingBlock
