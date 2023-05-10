import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useFetch from "../api/useFetch";
import Link from "next/link";
import { useGlobalContext } from "../../../context/context";

function Details() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useFetch("alpha", id);
  const [text, setText] = useState("text-slate-200");
  const [textD, setTextD] = useState("text-slate-400");

  const { isLight } = useGlobalContext();

  const { data: codeData } = useFetch("", "all");
  // console.log(router);
  // console.log(codeData);

  // useEffect(() => {
  //   isLight
  //     ? setText("text-slate-900") && setTextD("text-red-500")
  //     : setText("text-slate-200") && setText("text-slate-400");
  // }, [isLight]);

  useEffect(() => {
    if (isLight) {
      setText('text-slate-900');
      setTextD('text-slate-500');
    } else {
      setText('text-slate-200');
      setTextD('text-slate-400');
    }
  }, [isLight]);

  return (
    <div className="h-[100vh]">
      <div className="w-[90%] m-auto pt-10">
        <Link
          href={"/"}
          className={`${ isLight ? 'bg-slate-200 text-slate-950' : 'bg-slate-800 text-slate-100'} rounded-md px-5 py-2 shadow`}
        >
          Back
        </Link>
      </div>
      {/* <button className="back flex py-2 px-4 bg-slate-900 mt-10 md:ml-[10%]">
        Back
      </button> */}
      <div>
        {isLoading ? (
          <div className="w-10 h-10 border-t-2 border-r-4 border-b-6 border-gray-500 animate-spin rounded-full"></div>
        ) : isError ? (
          <div className="text-red text-center">Error fecthing data</div>
        ) : (
          data?.map((country, idx) => {
            const {
              name,
              flags,
              capital,
              region,
              population,
              borders,
              subregion,
              tld,
              currencies,
              languages,
            } = country;

            const languagesVal = languages && Object.values(languages);
            const currencyKeys = currencies && Object.keys(currencies);

            const getNativeKey = Object.keys(name.nativeName);
            const nativeName =
              name.nativeName[getNativeKey[getNativeKey.length - 1]]?.common;
            console.log(nativeName);

            // const languagesVal = Object.values(languages);
            // console.log(languagesVal);
            // console.log(currencyKeys);

            return (
              <div
                className="card grid md:grid-cols-3 gap-2 shadow-md w-[90%] m-auto mt-20"
                key={idx}
              >
                <div className="flag w-full">
                  <img
                    src={flags.png}
                    alt={name.common}
                    className="w-full h-full"
                  />
                </div>
                <div className="content md:col-span-2 w-full mt-3 p-3 space-y-2">
                  <h1 className="font-bold text-2xl">{name.common}</h1>
                  <div className="grid md:grid-cols-2 gap-5 py-4 space-y-10">
                    <div className="space-y-3">
                      <h1 className={`${text}`}>Native Name: {nativeName}</h1>
                      <h1 className={`${text}`}>
                        Population:{" "}
                        <span className={`${textD}`}>
                          {population.toLocaleString()}
                        </span>
                      </h1>
                      <h1 className={`${text}`}>
                        Region: <span className={ textD }>{region}</span>
                      </h1>
                      <h1 className={`${text}`}>
                        Sub Region:{" "}
                        <span className={ textD }>{subregion}</span>
                      </h1>
                      <h1 className={`${text}`}>
                        Capital:{" "}
                        <span className={ textD }>{capital}</span>
                      </h1>
                    </div>
                    <div className="space-y-3">
                      <h1 className={`${text}`}>
                        Top Level Domain:{" "}
                        <span className={ textD }>{tld}</span>
                      </h1>
                      <h1 className={`${text}`}>
                        Currencies:{" "}
                        <span className={ textD }>
                          {currencies && currencies[currencyKeys].name}
                        </span>{" "}
                        <span className={ textD }>
                          {currencies && currencies[currencyKeys].symbol}
                        </span>
                      </h1>
                      <h1 className={`${text}`}>
                        Languages:{" "}
                        <span className={ textD }>
                          {languagesVal
                            ?.map((val) => val)
                            .sort((a, b) => (a > b ? 1 : -1))
                            .join(", ")}
                        </span>
                      </h1>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 space-x-5">
                    <h1 className="col-span-1 ">Borders Countries:</h1>
                    <div className="col-span-3 flex flex-wrap gap-3">
                      {borders?.map((bord, idx) => {
                        const getDataCode = codeData.find(
                          (code) => code.cca3 === bord
                        );
                        return (
                          <Link href={`/views/${bord}`} key={idx}>
                            <p className={ `${ text, isLight ? 'bg-slate-300' : 'bg-gray-700 text-slate-400' } py-2 px-5 rounded` }>
                              {getDataCode?.name.common}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Details;
