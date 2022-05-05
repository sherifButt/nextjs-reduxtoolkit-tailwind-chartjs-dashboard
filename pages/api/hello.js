const handler = (req, res) => {
  const body = {
    success: true,
    data: {
      ...req.body,
      id: 'UT' + Math.floor(Math.random() * 900000000) + 1,
    },
  }

  setTimeout(() => {
    req.body
      ? res.status(200).json(body)
      : res.status(203).json({ success: false, message: 'nothing to return' })
  }, [2000])
}

export default handler
