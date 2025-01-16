const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <div className="my-20 max-w-[800px] mx-auto">{children}</div>
}

export default BlogLayout
