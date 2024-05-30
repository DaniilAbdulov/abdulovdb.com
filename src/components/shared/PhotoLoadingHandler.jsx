import { Spinner } from "react-bootstrap";
import { useImageLoader } from "../../hooks/useImageLoader";

export const PhotoLoadingHandler = ({ img, className = "", style = {} }) => {
  const { imgIsLoading } = useImageLoader(img);
  return (
    <>
      {imgIsLoading ? (
        <img src={img} alt="Flower" className={className} style={style} />
      ) : (
        <Spinner />
      )}
    </>
  );
};
