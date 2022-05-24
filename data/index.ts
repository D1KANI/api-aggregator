interface Link {
  title: string,
  description?: string,
  link: string
}

const IndexLinks: Link[] = [
  {
    title: 'Genius',
    description: 'This is API for Genuis.com',
    link: '/genius'
  },
  {
    title: 'Open Weather Map',
    description: 'This is API for find the weather',
    link: '/'
  }
]

export default IndexLinks
