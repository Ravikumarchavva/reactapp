/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
         {   protocol:'https',
            hostname:'encrypted-tbn0.gstatic.com'},
         {   protocol:'https',
            hostname:'icons.veryicon.com'},
         {   protocol:'https',
            hostname:'static.vecteezy.com'},
         {   protocol:'https',
            hostname:'img.icons8.com'},
         {   protocol:'https',
            hostname:'img.freepik.com'},
         {   protocol:'https',
            hostname:'media.wired.com'},
         {   protocol:'https',
            hostname:'cdn.sanity.io'},
        ]
    }
}

module.exports = nextConfig
