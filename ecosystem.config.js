module.exports = {
  apps : [
    {
      name: 'PersonaLWebsite',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ],
  deploy : {
    production : {
      user: 'jlindelof',
      host: ['lindelof.dev'],
      ref: 'origin/master',
      repo: 'git@github.com:Unholypanda/lindelof.dev.git',
      ssh_options: ['ForwardAgent=yes'],
      path: '/home/jlindelof/lindelof.dev/',
      'post-deploy' : 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}