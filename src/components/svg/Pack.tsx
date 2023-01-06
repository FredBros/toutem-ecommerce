import * as React from "react"
type Props={
  color?: string
}

const Pack = ({ color = "var(--nextui-colors-foreground)" }: Props) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{ width: "inherit", height: "inherit" }}
  >
    <g>
      <g>
        <path
          d="M503.716,121.636H403.385c1.198-1.043,2.377-2.115,3.511-3.249c12.78-12.779,19.818-29.77,19.818-47.842
			c0-18.073-7.038-35.064-19.818-47.844c-12.78-12.78-29.772-19.818-47.844-19.818c-18.019,0-34.964,6.998-47.73,19.707
			c-14.89,13.888-41.203,58.771-55.323,87.304c-14.121-28.533-40.433-73.415-55.323-87.304
			C187.909,9.88,170.965,2.883,152.944,2.883c-18.073,0-35.064,7.038-47.844,19.818c-12.78,12.78-19.818,29.771-19.818,47.844
			c0,18.072,7.039,35.064,19.819,47.842c1.134,1.134,2.313,2.207,3.511,3.249H8.284c-4.575,0-8.284,3.709-8.284,8.284v93.405
			c0,4.575,3.709,8.284,8.284,8.284h25.717v269.225c0,4.575,3.709,8.284,8.284,8.284h427.428c4.575,0,8.284-3.709,8.284-8.284
			V231.609h25.72c4.575,0,8.284-3.709,8.284-8.284V129.92C512,125.345,508.291,121.636,503.716,121.636z M405.846,91.091
			c-2.52,5.736-6.101,11.016-10.665,15.579c-9.64,9.64-22.456,14.954-36.084,14.963c-0.014,0-0.028,0.002-0.042,0.002h-49.317
			c9.853-19.876,28.368-51.001,36.962-58.953c0.078-0.073,0.156-0.147,0.231-0.223c13.516-13.515,35.507-13.515,49.021,0
			C403.554,70.061,407.12,80.45,405.846,91.091z M106.151,91.093c-1.275-10.642,2.293-21.032,9.893-28.633
			c13.515-13.515,35.507-13.514,49.021,0c0.075,0.076,0.152,0.15,0.232,0.223c8.594,7.952,27.109,39.076,36.962,58.953h-49.317
			c-0.014,0-0.028-0.002-0.042-0.002c-13.629-0.01-26.444-5.324-36.084-14.963C112.252,102.107,108.672,96.828,106.151,91.093z
			 M50.569,492.55V231.609H206.81V492.55H50.569z M206.811,215.041H16.568v-76.837h190.244V215.041z M176.67,50.635
			c-19.15-19.037-49.715-19.784-69.777-2.268c2.465-5.108,5.793-9.823,9.922-13.952c9.651-9.65,22.481-14.965,36.128-14.965
			c13.646,0,26.477,5.315,36.127,14.965c0.075,0.076,0.154,0.15,0.232,0.223c13.715,12.689,41.33,60.489,53.994,86.998h-22.721
			C211.766,102.154,188.97,62.141,176.67,50.635z M288.619,492.55h-65.241V231.609h65.241V492.55z M288.619,215.041h-65.241v-76.837
			h65.241V215.041z M268.699,121.636c12.664-26.508,40.279-74.309,53.994-86.998c0.078-0.073,0.157-0.147,0.232-0.223
			c9.65-9.65,22.48-14.965,36.127-14.965s26.478,5.315,36.128,14.965c4.129,4.129,7.457,8.844,9.922,13.952
			c-20.062-17.516-50.625-16.769-69.777,2.269c-12.301,11.507-35.096,51.519-43.905,71H268.699z M305.186,492.55V231.609h156.241
			V492.55H305.186z M305.186,215.041v-76.837h190.245v76.837H305.186z"
          fill={color}
        />
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

export default Pack