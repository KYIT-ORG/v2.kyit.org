export default async(r, c) => {
  
    let ua = r.headers.get('user-agent')

    let is_curl = ua.includes('curl')
   
    if(!is_curl) return
  

    let t1 = `\x1b[1;33m\n
    Your IP: ${c.ip} \n
    Your Location: ${c.geo.city} - ${c.geo.subdivision.name} - ${c.geo.country.name} \n
    Your Browser: ${r.headers.get('user-agent')} \n
    \x1b[0m`
    
    return new Response(t1)

}
