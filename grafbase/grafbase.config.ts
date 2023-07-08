import { g, auth, config } from '@grafbase/sdk'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.

//
// Define Data Models
// https://grafbase.com/docs/database

const post = g.model('Post', {
  title: g.string(),
  slug: g.string().unique(),
  content: g.string().optional(),
  publishedAt: g.datetime().optional(),
  comments: g.relation(() => comment).optional().list().optional(),
  likes: g.int().default(0),
  tags: g.string().optional().list().length({ max: 5 })
}).search()

const comment = g.model('Comment', {
  post: g.relation(post),
  body: g.string(),
  likes: g.int().default(0)
})

export default config({
  schema: g

})
