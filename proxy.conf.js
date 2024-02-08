const PROXY_CONF_CONFIG = [
  {
    context: ['/reset'],
    target: 'http://localhost:8085/api',
    secure: false
  },
  {
    context: ['/api'],
    target: 'http://localhost:8085',
    secure: false
  },
  {
    context: ['/secure'],
    target: 'http://localhost:8085/api',
    secure: false
  }
];

module.exports = PROXY_CONF_CONFIG;
