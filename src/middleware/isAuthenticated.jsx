import axios from "axios";
import React, { useEffect } from "react";

export default async function withAuth(WrappedComponent) {
  const AuthenticatedComponent = async (props) => {
    useEffect(() => {
      //   console.log(demo_api_call);
      if (!token) {
        props.history.push("/login");
      }
    }, []);

    // const token = JSON.parse(localStorage.getItem("token"));

    // const demo_api_call = await axios.get(
    //   "https://api.district7.com.ng/api/auth/user",
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Accept: "application/json",
    //       authorization: `Token ${token}`,
    //     },
    //   }
    // );
    // const demo_api_res = demo_api_call;

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
}
