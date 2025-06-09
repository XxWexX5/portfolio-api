module.exports = ({ env }) => ({
    graphql: {
      enabled: true,
      config: {
        playgroundAlways: true,
        defaultLimit: 100,
        maxLimit: 250,
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
      },
    }
});