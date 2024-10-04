/* eslint-disable react/prop-types */
import { ImageList, ImageListItem } from "@mui/material"
import PropTypes from 'prop-types'

export const ImageGallery = ({ images }) => {

  return (
    <ImageList
      sx={{ width: '100%', height: 700 }}
      cols={3}
      gap={8}
    >
      {images?.map((item) => (
        <ImageListItem
          key={item}
        >
          <img
            srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item}?w=161&fit=crop&auto=format`}
            alt={'note image'}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

ImageGallery.propTyes = {
  images: PropTypes.array
}