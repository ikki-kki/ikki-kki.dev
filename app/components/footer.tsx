const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex justify-center py-8">
      <p className="text-foreground">1wei.dev - {currentYear}</p>
    </div>
  )
}

export default Footer
