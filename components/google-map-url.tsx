interface GoogleMapUrlProps {
  latitude: number
  longitude: number
}

const GoogleMapUrl = ({ latitude, longitude }: GoogleMapUrlProps) => {
  return (
    <a
      href={`https://www.google.com/maps?q=${latitude},${longitude}`}
      target="_blank"
      className="hover:underline"
    >
      {latitude},{longitude}
    </a>
  )
}

export default GoogleMapUrl
