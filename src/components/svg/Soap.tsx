import * as React from "react";

type Props = {
    color? : string
}

const Soap = ({ color = "var(--nextui-colors-foreground)" }: Props) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    enableBackground="new 0 0 1000 1000"
    style={{ width: "inherit", height: "inherit" }}
  >
    <g>
      <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
        <path
          d="M2473.4,4466.1c-154.9-49.1-317.6-191.1-389.9-340.9c-69.7-144.6-77.5-384.8-18.1-526.8c56.8-129.1,191.1-273.7,315-340.8c142-74.9,423.5-77.5,570.7-5.2c400.2,196.2,495.8,728.2,188.5,1043.2C2966.6,4471.2,2700.6,4538.4,2473.4,4466.1z M2878.8,4244c165.3-80,250.5-235,235-433.8c-12.9-178.2-82.6-291.8-227.2-364.1c-175.6-90.4-382.2-62-526.8,72.3c-142,131.7-178.2,312.4-105.9,490.6C2364.9,4269.8,2623.1,4367.9,2878.8,4244z"
          fill={color}
        />
        <path
          d="M5853.5,4083.9c-289.2-191.1-193.7-612,149.8-653.3c185.9-23.2,361.5,121.4,384.7,315c25.8,196.3-152.3,397.7-351.2,397.7C5980,4143.3,5905.2,4120,5853.5,4083.9z M6145.3,3892.8c56.8-51.6,59.4-157.5,2.6-219.5c-87.8-98.1-266-28.4-266,103.3C5881.9,3916.1,6042,3985.8,6145.3,3892.8z"
          fill={color}
        />
        <path
          d="M6690.1,3626.8c-170.4-59.4-255.6-121.4-405.4-286.6c-116.2-129.1-116.2-129.1-214.3-103.3c-134.2,38.7-206.6,36.2-366.7-12.9c-175.6-51.6-343.5-214.3-408-395.1l-46.5-131.7h-970.9c-1048.4,0-1120.7-7.7-1355.7-144.6c-134.3-80-325.4-278.9-395.1-418.3c-131.7-258.2-131.7-258.2-131.7-2435v-2032.2l-147.2-18.1c-309.9-36.2-573.2-222.1-694.6-490.6c-64.6-136.9-64.6-139.5-142-111c-108.4,36.1-330.5,10.3-457-54.2c-136.9-69.7-286.6-247.9-322.8-382.2c-25.8-98.1-43.9-118.8-165.3-175.6c-165.3-82.6-281.5-216.9-330.5-384.8c-49.1-162.7-49.1-235,2.6-284c36.2-36.1,513.9-41.3,4864.9-41.3c4441.4,0,4828.7,2.6,4867.5,41.3c100.7,100.7-80,415.8-304.7,532c-56.8,28.4-173,59.4-255.7,67.1c-147.2,12.9-154.9,15.5-204,116.2c-74.9,142-255.7,312.4-426.1,395.1c-167.8,82.6-485.5,113.6-637.8,64.6c-87.8-28.4-98.1-25.8-255.7,82.6c-90.4,62-232.4,139.5-312.4,173l-147.2,62v1815.3c0,1712,2.6,1815.3,46.5,1815.3c93,2.6,263.4,103.3,315,185.9c62,100.7,67.1,260.8,10.3,369.3c-36.2,69.7-36.2,85.2,5.1,173c33.6,72.3,38.7,139.4,28.4,271.1c-10.3,154.9-5.2,180.8,49.1,253.1c322.8,423.5,214.3,1069-229.8,1373.7C7312.5,3678.5,6961.3,3725,6690.1,3626.8z M7317.6,3420.3c459.7-196.3,599.1-821.1,266-1195.6c-113.6-129.1-118.8-152.4-59.4-289.2c46.5-113.6,31-206.6-56.8-325.4c-77.5-105.9-77.5-108.4,2.6-193.7c170.4-183.3-36.2-433.8-216.9-266c-51.7,49.1-56.8,72.3-41.3,193.7l15.5,136.9l-116.2,49.1c-129.1,59.4-196.2,160.1-196.2,297c0,103.3-20.7,121.4-188.5,183.3c-69.7,25.8-178.2,100.7-253.1,173c-72.3,69.7-147.2,126.5-167.8,126.5c-23.3,0-80.1-31-126.5-67.1c-229.8-173-565.5-85.2-686.9,183.3c-62,131.7-59.4,229.8,0,364.1c105.9,235,389.9,335.7,617.1,219.5c124-62,170.4-51.6,211.7,51.6c43.9,105.9,209.2,268.6,338.3,333.1C6865.7,3500.3,7108.5,3510.6,7317.6,3420.3z M5298.3,2382.2c123.9-353.8,550-529.4,883.1-366.7l100.7,49.1l152.4-111c82.6-59.4,178.2-116.2,211.7-124c36.2-10.3,62-36.1,62-59.4c0-82.6,134.3-312.4,206.6-353.8c56.8-36.1,74.9-67.1,85.2-160.1c7.7-62,36.2-147.2,67.2-188.5c54.2-72.3,54.2-80,54.2-1921.2v-1846.3h-175.6c-214.3,0-529.4-77.5-710.1-173c-74.9-38.7-222.1-157.5-330.5-266c-227.2-224.7-361.5-470-413.2-756.6l-33.6-175.6l-1110.4,7.7l-1112.9,7.7l-129.1,64.6c-165.3,80-346,260.8-426.1,426.1l-64.6,129.1v2646.8V1858l62,134.3c69.7,154.9,289.2,377,433.8,439c170.4,69.7,309.9,80,1234.3,82.6l903.8,2.6L5298.3,2382.2z M2395.9-2903.6c0-196.2,12.9-420.9,25.8-495.8c38.7-198.8,139.4-389.9,284-539.7l126.5-129.1H1567H301.7l15.5,59.4c46.5,152.4,193.7,276.3,369.3,315c62,12.9,85.2,33.6,95.5,85.2c41.3,201.4,72.3,263.4,167.8,351.2c56.8,49.1,131.7,98.1,167.8,108.5c85.2,20.7,263.4,0,366.7-43.9c72.3-28.4,87.8-28.4,131.7,10.3c25.8,25.8,64.6,92.9,80.1,154.9c85.2,289.2,322.8,477.7,604.2,482.9h95.5V-2903.6z M7278.9-2947.5c188.5-56.8,322.8-126.5,462.2-240.1c160.1-131.7,173-136.9,232.4-105.9c157.5,85.2,439,77.5,640.4-18.1c142-67.1,304.7-247.9,361.5-402.8l51.6-134.3l180.8,7.7c108.5,5.2,204-2.6,240.1-20.7c74.9-38.7,204-157.5,204-185.9c0-10.3-893.4-20.7-1988.3-20.7H5675.3v59.4c0,33.6,18.1,123.9,41.3,201.4c113.6,387.3,415.7,702.4,808.2,839.2C6734-2893.3,7067.2-2885.5,7278.9-2947.5z"
          fill={color}
        />
        <path
          d="M2927.9,1382.9c-23.2-33.6-25.8-715.3-5.2-748.8c25.8-38.7,105.9-36.1,142,7.7c20.7,23.2,28.4,152.4,23.2,392.5l-7.7,358.9l-69.7,7.7C2974.3,1406.1,2935.6,1398.4,2927.9,1382.9z"
          fill={color}
        />
        <path
          d="M2925.3,138.3c-10.3-12.9-18.1-550-18.1-1190.4c0-1032.9,5.2-1167.2,41.3-1205.9c33.6-31,51.6-33.6,87.8-12.9c41.3,25.8,43.9,121.4,51.6,1198.2c2.6,841.8-2.6,1180.1-23.2,1203.3C3028.6,174.4,2948.5,177,2925.3,138.3z"
          fill={color}
        />
        <path
          d="M818.2-1751.9c-284-191.1-268.5-575.8,25.8-733.4c144.6-74.9,247.9-74.9,389.9,0c389.9,206.6,247.9,792.8-193.7,792.8C942.1-1692.5,882.7-1708,818.2-1751.9z M1200.4-1955.9c139.4-131.7,33.6-382.2-160.1-382.2c-211.7,0-302.1,260.8-136.9,400.3C998.9-1857.8,1102.2-1863,1200.4-1955.9z"
          fill={color}
        />
        <path
          d="M9158.7-2578.2c-198.8-134.3-260.8-361.5-149.8-560.3c157.5-278.9,596.5-271.1,730.8,10.3c131.7,281.5-67.1,609.4-371.8,609.4C9285.3-2518.8,9218.1-2536.9,9158.7-2578.2z M9502.2-2761.6c77.5-56.8,103.3-162.7,62-258.2c-74.9-178.2-317.6-178.2-392.5,0c-38.7,95.5-28.4,149.8,49,237.6C9280.1-2717.7,9429.9-2704.8,9502.2-2761.6z"
          fill={color}
        />
      </g>
    </g>
  </svg>
);

export default Soap;
