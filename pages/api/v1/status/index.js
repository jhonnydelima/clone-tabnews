function status(request, response) {
  response.status(200).json({ chave: "all good" });
}

export default status;
