import React from "react";

const Login = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <div className="card mt-5">    
                            <div className="card-body bg-light">
                                <h2 className="text-center">LOGIN SISTEM</h2>
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="Email">Email </label>
                                        <input type="email" className="form-control" name="email" placeholder="Masukkan Email.." />
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <label htmlFor="Password">Password </label>
                                        <input type="password" className="form-control" name="password" placeholder="Masukkan Password.."  />
                                    </div>
                                    <br/>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Submit</button>   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Login