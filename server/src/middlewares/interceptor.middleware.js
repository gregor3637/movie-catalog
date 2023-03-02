const outer = (id) => {
  return  async (req, res, next) => {
    if (req && req.params) {
    }
    next();
  };
  
}


export default outer;
