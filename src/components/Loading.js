import { ShimmerSimpleGallery } from "react-shimmer-effects"
const Loading = () => {
    return <>
        <div className="loading">
            <ShimmerSimpleGallery card imageHeight={250} caption={true} col={4} />
        </div>
    </>
}
export default Loading;