import styles from "./styles.module.css";

export function NavBar() {
  return (
    <div className={styles.navbar}>
      <h1>Nêta</h1>

      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.6831 13.7764H25.3393C26.0761 13.7764 26.6735 14.3737 26.6735 15.1105V16.8894C26.6739 17.2436 26.5336 17.5834 26.2833 17.834C26.0331 18.0846 25.6934 18.2254 25.3393 18.2254H23.6831C23.5188 18.7946 23.2912 19.3435 23.0045 19.862L24.1759 21.0334C24.6967 21.5543 24.6967 22.3989 24.1759 22.9199L22.9182 24.1775C22.3972 24.6984 21.5527 24.6984 21.0317 24.1775L19.8594 23.0061C19.3411 23.2924 18.7925 23.52 18.2237 23.6848V25.3392C18.2237 26.076 17.6264 26.6733 16.8896 26.6733H15.1107C14.3738 26.6733 13.7765 26.076 13.7765 25.3392V23.6848C13.2075 23.5197 12.6585 23.2918 12.1399 23.0053L10.9676 24.1767C10.438 24.677 9.60988 24.677 9.08024 24.1767L7.82256 22.919C7.30173 22.398 7.30173 21.5535 7.82256 21.0325L8.99574 19.8593C8.70891 19.3412 8.48126 18.7926 8.31709 18.2236H6.66095C5.92411 18.2236 5.32678 17.6263 5.32678 16.8894V15.1105C5.32678 14.3737 5.92411 13.7764 6.66095 13.7764H8.31709C8.48133 13.2077 8.70897 12.6594 8.99574 12.1416L7.82345 10.9702C7.57306 10.72 7.43238 10.3805 7.43238 10.0265C7.43238 9.67249 7.57306 9.33301 7.82345 9.08278L9.08202 7.82511C9.60301 7.30427 10.4475 7.30427 10.9685 7.82511L12.1408 8.99651C12.6592 8.71029 13.2078 8.48267 13.7765 8.31786V6.66083C13.7765 5.92399 14.3738 5.32666 15.1107 5.32666H16.8896C17.6264 5.32666 18.2237 5.92399 18.2237 6.66083V8.31786C18.7923 8.48229 19.3407 8.70993 19.8585 8.99651L21.0308 7.82511C21.5518 7.30427 22.3963 7.30427 22.9173 7.82511L24.1759 9.08189C24.4263 9.33212 24.567 9.6716 24.567 10.0256C24.567 10.3796 24.4263 10.7191 24.1759 10.9693L23.0045 12.1398C23.2909 12.6584 23.5185 13.2073 23.6831 13.7764ZM11.5529 16C11.5529 18.4561 13.544 20.4472 16.0001 20.4472C18.455 20.4443 20.4444 18.4549 20.4474 16C20.4474 13.5439 18.4563 11.5528 16.0001 11.5528C13.544 11.5528 11.5529 13.5439 11.5529 16Z"
          fill="#FCFCFA"
        />
        <mask
          id="mask0_616_2068"
          maskUnits="userSpaceOnUse"
          x="5"
          y="5"
          width="22"
          height="22"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.6831 13.7764H25.3393C26.0761 13.7764 26.6735 14.3737 26.6735 15.1105V16.8894C26.6739 17.2436 26.5336 17.5834 26.2833 17.834C26.0331 18.0846 25.6934 18.2254 25.3393 18.2254H23.6831C23.5188 18.7946 23.2912 19.3435 23.0045 19.862L24.1759 21.0334C24.6967 21.5543 24.6967 22.3989 24.1759 22.9199L22.9182 24.1775C22.3972 24.6984 21.5527 24.6984 21.0317 24.1775L19.8594 23.0061C19.3411 23.2924 18.7925 23.52 18.2237 23.6848V25.3392C18.2237 26.076 17.6264 26.6733 16.8896 26.6733H15.1107C14.3738 26.6733 13.7765 26.076 13.7765 25.3392V23.6848C13.2075 23.5197 12.6585 23.2918 12.1399 23.0053L10.9676 24.1767C10.438 24.677 9.60988 24.677 9.08024 24.1767L7.82256 22.919C7.30173 22.398 7.30173 21.5535 7.82256 21.0325L8.99574 19.8593C8.70891 19.3412 8.48126 18.7926 8.31709 18.2236H6.66095C5.92411 18.2236 5.32678 17.6263 5.32678 16.8894V15.1105C5.32678 14.3737 5.92411 13.7764 6.66095 13.7764H8.31709C8.48133 13.2077 8.70897 12.6594 8.99574 12.1416L7.82345 10.9702C7.57306 10.72 7.43238 10.3805 7.43238 10.0265C7.43238 9.67249 7.57306 9.33301 7.82345 9.08278L9.08202 7.82511C9.60301 7.30427 10.4475 7.30427 10.9685 7.82511L12.1408 8.99651C12.6592 8.71029 13.2078 8.48267 13.7765 8.31786V6.66083C13.7765 5.92399 14.3738 5.32666 15.1107 5.32666H16.8896C17.6264 5.32666 18.2237 5.92399 18.2237 6.66083V8.31786C18.7923 8.48229 19.3407 8.70993 19.8585 8.99651L21.0308 7.82511C21.5518 7.30427 22.3963 7.30427 22.9173 7.82511L24.1759 9.08189C24.4263 9.33212 24.567 9.6716 24.567 10.0256C24.567 10.3796 24.4263 10.7191 24.1759 10.9693L23.0045 12.1398C23.2909 12.6584 23.5185 13.2073 23.6831 13.7764ZM11.5529 16C11.5529 18.4561 13.544 20.4472 16.0001 20.4472C18.455 20.4443 20.4444 18.4549 20.4474 16C20.4474 13.5439 18.4563 11.5528 16.0001 11.5528C13.544 11.5528 11.5529 13.5439 11.5529 16Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_616_2068)"></g>
      </svg>
    </div>
  );
}
