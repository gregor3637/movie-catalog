const outer = (id) => {
  return  async (req, res, next) => {
    console.log("🚀🚀🚀🚀 ~ interceptor id= " , id);
    if (req && req.params) {
      console.log("🚀🚀🚀🚀 ~ interceptor.middleware req.params:", req.params);
    }
    next();
  };
  
}


export default outer;
