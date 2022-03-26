module.exports = {
  experimental: {
    async redirects() {
      return [
        { source: '/', destination: '/home', permanent: true }, // a permanent redirect
      ];
    },
  },
}

