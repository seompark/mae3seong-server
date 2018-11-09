const Hapi = require('hapi')
const mongo = require('mongodb')

const start = async () => {
  const server = new Hapi.Server({ port: parseInt(process.env.PORT, 10) || 3000 })

  server.route({
    method: 'GET',
    path: '/problems',
    handler: async (req, h) => {

    }
  })

  server.route({
    method: 'POST',
    path: '/problems/{idx}',
    handler: async (req, h) => {
      
    }
  })

  await server.start()
}

start()
