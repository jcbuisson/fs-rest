module.exports = {
   apps : [
      {
         name: 'rest',
         script: './app.js',
         watch: false,

         env: {
            DATABASE_URL: 'postgresql://chris:eureka31@localhost:5432/rest',
         },
      },
   ]
}