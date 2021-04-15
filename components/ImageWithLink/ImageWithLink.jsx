import styles from './ImageWithLink.module.css'

const ImageWithLink = ({link, imagePath, description}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imagePath} alt={description} />
    </a>
  );
}

export default ImageWithLink
