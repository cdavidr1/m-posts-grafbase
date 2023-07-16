import { g, auth, config } from '@grafbase/sdk'

// Welcome to Grafbase!
// Define your data models, integrate auth, permission rules, custom resolvers, search, and more with Grafbase.

//
// Define Data Models
// https://grafbase.com/docs/database

const post = g.model('Post', {
  title: g.string(),
  content: g.string().optional(),
  image: g.url(),
  publishedAt: g.datetime().optional(),
  comments: g.relation(() => comment).optional().list().optional(),
  likes: g.int().default(0),
  category: g.string().search()
}).search()

const comment = g.model('Comment', {
  post: g.relation(post),
  body: g.string(),
  likes: g.int().default(0)
})

export default config({
  schema: g

})
