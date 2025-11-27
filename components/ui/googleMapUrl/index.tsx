import * as styles from './index.css'

interface GoogleMapUrlProps {
  latitude: number
  longitude: number
}

const GoogleMapUrl = ({ latitude, longitude }: GoogleMapUrlProps) => {
  return (
    <a
      href={`https://www.google.com/maps?q=${latitude},${longitude}`}
      target="_blank"
      className={styles.link}
    >
      {latitude},{longitude}
    </a>
  )
}

export default GoogleMapUrl
