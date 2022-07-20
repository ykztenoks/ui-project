import toast from "react-hot-toast";

export function Footer() {
  function homeClick() {
    toast.success("aqui é o botão da home");
  }

  function walletClick() {
    toast.success("carteira aqui");
  }

  function profileClick() {
    toast.success("aqui vai ser o profile");
  }
  return (
    <>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#1A405F", height: "65px" }}
      >
        <div className="container">
          <section className="d-flex justify-content-around pt-3">
            <p id="home">
              <svg
                width="26"
                height="30"
                viewBox="0 0 26 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={homeClick}
              >
                <path
                  d="M9 19V29H1V11L13 1L25 11V29H17V19H9Z"
                  stroke="#FCFCFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <p id="carteira">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={walletClick}
              >
                <path
                  d="M8.88889 4.62222H24.8889V6H8.88889V4.62222Z"
                  fill="#FCFCFA"
                />
                <path
                  d="M25.7778 7.11111H8.76445C8.53761 7.1079 8.31377 7.05877 8.10643 6.9667C7.89908 6.87462 7.71254 6.74151 7.55804 6.57538C7.40354 6.40926 7.28429 6.21356 7.20748 6.00009C7.13067 5.78663 7.09789 5.55981 7.11112 5.33333C7.11001 4.88263 7.28014 4.44833 7.58707 4.11828C7.89401 3.78824 8.31485 3.5871 8.76445 3.55556H25.7778C26.0135 3.55556 26.2396 3.46191 26.4063 3.29521C26.573 3.12851 26.6667 2.90242 26.6667 2.66667C26.6667 2.43092 26.573 2.20483 26.4063 2.03813C26.2396 1.87143 26.0135 1.77778 25.7778 1.77778H8.76445C7.84319 1.81004 6.97048 2.19884 6.33036 2.86217C5.69025 3.5255 5.33277 4.41151 5.33334 5.33333C5.32474 5.47839 5.32474 5.62383 5.33334 5.76889C5.32477 5.83974 5.32477 5.91137 5.33334 5.98222V26.6667C5.33277 27.5885 5.69025 28.4745 6.33036 29.1378C6.97048 29.8012 7.84319 30.19 8.76445 30.2222H25.7778C26.0135 30.2222 26.2396 30.1286 26.4063 29.9619C26.573 29.7952 26.6667 29.5691 26.6667 29.3333V8.06222C26.6672 7.82039 26.5756 7.58744 26.4104 7.41076C26.2453 7.23408 26.0191 7.12693 25.7778 7.11111ZM24.8889 28.4444H8.76445C8.31485 28.4129 7.89401 28.2118 7.58707 27.8817C7.28014 27.5517 7.11001 27.1174 7.11112 26.6667V8.48889C7.61653 8.76771 8.18748 8.90584 8.76445 8.88889H24.8889V28.4444Z"
                  fill="#FCFCFA"
                />
              </svg>
            </p>
            <p className="profile">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={profileClick}
              >
                <path
                  d="M16 2.66667C8.636 2.66667 2.66666 8.636 2.66666 16C2.66666 23.364 8.636 29.3333 16 29.3333C23.364 29.3333 29.3333 23.364 29.3333 16C29.3333 8.636 23.364 2.66667 16 2.66667Z"
                  stroke="#FCFCFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.69466 24.4613C5.69466 24.4613 8.66666 20.6667 16 20.6667C23.3333 20.6667 26.3067 24.4613 26.3067 24.4613M16 16C17.0609 16 18.0783 15.5786 18.8284 14.8284C19.5786 14.0783 20 13.0609 20 12C20 10.9391 19.5786 9.92172 18.8284 9.17157C18.0783 8.42143 17.0609 8 16 8C14.9391 8 13.9217 8.42143 13.1716 9.17157C12.4214 9.92172 12 10.9391 12 12C12 13.0609 12.4214 14.0783 13.1716 14.8284C13.9217 15.5786 14.9391 16 16 16V16Z"
                  stroke="#FCFCFA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </section>
        </div>
      </footer>
    </>
  );
}
