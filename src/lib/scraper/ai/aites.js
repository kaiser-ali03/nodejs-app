require("../../../../configs")

exports.tesku = async (text) => {
  let a = await axios.get(`https://api.yogik.id/ai/luminai?text=${encodeURIComponent(text)}`).then(a => a.data.result)
  return a
}