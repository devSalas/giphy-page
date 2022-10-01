export default async  function Fetch(url){
  const res= await fetch(url)
  const json= await res.json()
  return json
}