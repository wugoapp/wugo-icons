import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import Svg, {
  Defs,
  ClipPath,
  Rect,
  Path,
  RadialGradient,
  Stop,
  LinearGradient,
  Image,
  G,
  Use,
} from "react-native-svg";
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={89.412}
    height={67.29}
    viewBox="0 0 89.412 67.29"
    {...props}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_8923"
          data-name="Rectangle 8923"
          width={89.412}
          height={67.29}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Path
          id="Path_67462"
          data-name="Path 67462"
          d="M10.321,168.831a1.6,1.6,0,0,0,0,2.785l11.642,6.559a4,4,0,0,0,3.88.02l12.34-6.711a2.4,2.4,0,0,1-.374-.189l-12.13,6.6a3.66,3.66,0,0,1-3.547-.019l-11.642-6.559a1.25,1.25,0,0,1,0-2.183l17.48-9.8-.346-.2Z"
          transform="translate(-9.504 -159.13)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient"
        cx={0.219}
        cy={0.979}
        r={0.964}
        gradientTransform="translate(-0.029) scale(0.682 1)"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#3badea" />
        <Stop offset={0.5} stopColor="#43d6d8" />
        <Stop offset={1} stopColor="#4affc7" />
      </RadialGradient>
      <ClipPath id="clip-path-3">
        <Path
          id="Path_67463"
          data-name="Path 67463"
          d="M274.52,156.834l9.989,5.311a.994.994,0,0,1,0,1.755l-8.687,4.65.163.3,8.687-4.65a1.339,1.339,0,0,0,0-2.363l-9.989-5.311Z"
          transform="translate(-274.52 -156.53)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-2"
        cx={0.493}
        cy={0.496}
        r={0.471}
        gradientTransform="translate(0.951) scale(1.135 1)"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#4affc7" />
        <Stop offset={0.5} stopColor="#43d6d8" />
        <Stop offset={1} stopColor="#3badea" />
      </RadialGradient>
      <ClipPath id="clip-path-4">
        <Path
          id="Path_67464"
          data-name="Path 67464"
          d="M199.366,95.9c-.323.121-1.217.081-1.487.307s.062.476.382.542a1.674,1.674,0,0,0,.75,0,2.278,2.278,0,0,1,.992-.013.359.359,0,0,0,.454-.359c.014-.147.034-.524.034-.524l-1-.328s.006.327-.129.377"
          transform="translate(-197.78 -95.525)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient"
        x1={-41.706}
        y1={14.269}
        x2={-41.497}
        y2={14.269}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#0085f2" />
        <Stop offset={0.5} stopColor="#005cbc" />
        <Stop offset={1} stopColor="#003286" />
      </LinearGradient>
      <ClipPath id="clip-path-5">
        <Path
          id="Path_67465"
          data-name="Path 67465"
          d="M204.1,75.056c-.2,1.093-.549,4.877-.535,5.422.008.288,1.372.811,1.488.171.4-2.187.728-4.822.728-5.109,0-.544-.6-.864-1.085-.864-.3,0-.55.12-.6.38"
          transform="translate(-203.562 -74.676)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-2"
        x1={-8.261}
        y1={19.646}
        x2={-8.219}
        y2={19.646}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-6">
        <Rect
          id="Rectangle_8406"
          data-name="Rectangle 8406"
          width={28.574}
          height={34.809}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-7">
        <Path
          id="Path_67467"
          data-name="Path 67467"
          d="M205.661,55.642a40.742,40.742,0,0,0-.52,6.041c-.032,1,1.6,1.288,1.832.537.179-.576.411-2.288.551-2.873a10.6,10.6,0,0,0,.392-2.075c0-.279-1.529-1.787-2.074-1.787a.17.17,0,0,0-.182.156"
          transform="translate(-205.141 -55.486)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-3"
        x1={-7.249}
        y1={16.19}
        x2={-7.212}
        y2={16.19}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-9">
        <Path
          id="Path_67469"
          data-name="Path 67469"
          d="M217.2,102.238a.723.723,0,0,0-.023.173,5.412,5.412,0,0,1-.093.8c-.053.231-.055.679.263.787s.439,0,.674-.263a.846.846,0,0,0,.214-.66c-.013-.115-.048-.505-.07-.686a1.043,1.043,0,0,0-.1-.321Z"
          transform="translate(-217.054 -102.068)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-4"
        x1={-49.291}
        y1={19.002}
        x2={-49.063}
        y2={19.002}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#007fd9" />
        <Stop offset={0.5} stopColor="#00a8ec" />
        <Stop offset={1} stopColor="#00d0ff" />
      </LinearGradient>
      <ClipPath id="clip-path-10">
        <Path
          id="Path_67470"
          data-name="Path 67470"
          d="M214.733,81.464c0,1.114.342,4.9.454,5.43.06.281,1.491.5,1.49-.152,0-2.229-.156-4.883-.208-5.165a.9.9,0,0,0-.954-.642c-.4,0-.782.186-.782.529"
          transform="translate(-214.733 -80.935)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-5"
        x1={-30.667}
        y1={6.912}
        x2={-30.524}
        y2={6.912}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-12">
        <Path
          id="Path_67472"
          data-name="Path 67472"
          d="M212.537,62.939a37.743,37.743,0,0,0,.632,5.811c.157.948,1.682.839,1.767.073.065-.589.09-2.311.117-2.9a21.221,21.221,0,0,0-.01-2.978c-.035-.184-.911-.406-1.617-.406-.485,0-.89.1-.89.4"
          transform="translate(-212.537 -62.542)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-6"
        x1={-22.568}
        y1={6.957}
        x2={-22.462}
        y2={6.957}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-14">
        <Path
          id="Path_67475"
          data-name="Path 67475"
          d="M197.207,45.962a11.557,11.557,0,0,1-2.659.317.776.776,0,0,0-.109,1.032,8.316,8.316,0,0,0,3.072-.087c1.03-.356.508-1.282-.142-1.282a.684.684,0,0,0-.162.019"
          transform="translate(-194.296 -45.943)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-7"
        x1={-12.611}
        y1={12.707}
        x2={-12.546}
        y2={12.707}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-15">
        <Path
          id="Path_67476"
          data-name="Path 67476"
          d="M204.413,35.856c-.084.169-.336,1.186-.772,2.3s.039,1.473.4,1.409.6-.331,1.3-1.6.7-1.99.363-2.521a.54.54,0,0,0-.463-.237.983.983,0,0,0-.833.643"
          transform="translate(-203.467 -35.213)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-8"
        x1={-10.741}
        y1={11.317}
        x2={-10.687}
        y2={11.317}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-16">
        <Path
          id="Path_67477"
          data-name="Path 67477"
          d="M207.761,33.853a3.91,3.91,0,0,0-.947.136c-.291.148-1.156,7.758-1.118,7.807a6.719,6.719,0,0,0,1.267.506l.246-.564.33.8a13.9,13.9,0,0,0,2.667.183l.686-7.5-.985-.822a.97.97,0,0,1-.28-.395,1.125,1.125,0,0,0-.235-.385.823.823,0,0,0-.313-.1Z"
          transform="translate(-205.696 -33.522)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-9"
        x1={-10.975}
        y1={6.266}
        x2={-10.922}
        y2={6.266}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-17">
        <Path
          id="Path_67478"
          data-name="Path 67478"
          d="M211.02,34.9a.757.757,0,0,0-.239.335l-.423.7.309.218-.284.28.585,1.667a12.87,12.87,0,0,0,.2-1.782c-.03-.373,0-.7-.021-.9a.559.559,0,0,1,.29-.637.308.308,0,0,0-.088-.013.552.552,0,0,0-.326.137"
          transform="translate(-210.359 -34.765)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-10"
        x1={-38.492}
        y1={16.703}
        x2={-38.308}
        y2={16.703}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-19">
        <Path
          id="Path_67480"
          data-name="Path 67480"
          d="M212.575,38.018a8.437,8.437,0,0,0-.045,1.02c0,.119.005.23.008.333l.134.4s.4-.6.423-.653c.126-.238.259-.472.389-.689l-.416-.515Z"
          transform="translate(-212.529 -37.918)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-11"
        x1={-41.706}
        y1={27.769}
        x2={-41.509}
        y2={27.769}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={0.5} stopColor="#e4e5f6" />
        <Stop offset={1} stopColor="#cacced" />
      </LinearGradient>
      <ClipPath id="clip-path-20">
        <Path
          id="Path_67481"
          data-name="Path 67481"
          d="M212.736,37.986v.444a1.032,1.032,0,0,0-.215.572l.007,1.373s.462-1.041.562-1.251a1.261,1.261,0,0,0-.045-.611,1.372,1.372,0,0,0,.232-.325l-.214-.267Z"
          transform="translate(-212.522 -37.92)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-12"
        x1={-47.041}
        y1={22.177}
        x2={-46.819}
        y2={22.177}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#e83155" />
        <Stop offset={0.5} stopColor="#f48887" />
        <Stop offset={1} stopColor="#ffdfb9" />
      </LinearGradient>
      <ClipPath id="clip-path-21">
        <Path
          id="Path_67482"
          data-name="Path 67482"
          d="M214.106,34.365c-.153.189-.335.546-.607.907a15.6,15.6,0,0,0-.954,1.94l1.639-1.514-.073-.273.256.027.222-1.033a.922.922,0,0,0-.026-.5.574.574,0,0,0-.339-.395.675.675,0,0,1-.118.836"
          transform="translate(-212.545 -33.529)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-13"
        x1={-14.875}
        y1={13.934}
        x2={-14.803}
        y2={13.934}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-23">
        <Path
          id="Path_67485"
          data-name="Path 67485"
          d="M193,40.049l-2.848,1.743c-.06.037-.061.094,0,.127l4.121,2.358a.231.231,0,0,0,.214-.005l2.848-1.744c.06-.037.061-.094,0-.127l-4.121-2.358a.2.2,0,0,0-.1-.023.222.222,0,0,0-.115.03"
          transform="translate(-190.106 -40.019)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-14"
        x1={-7.165}
        y1={12.572}
        x2={-7.127}
        y2={12.572}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#cacced" />
        <Stop offset={0.5} stopColor="#e4e5f6" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="clip-path-24">
        <Path
          id="Path_67486"
          data-name="Path 67486"
          d="M197.365,47.206v0Zm-7.276-.523v0a.046.046,0,0,0,0,.009l0,.005v0h0a.022.022,0,0,0,0,.009.01.01,0,0,0,0,0l0,0v0l.009.01h0l.011.007.007.006h0l4.121,2.358a.159.159,0,0,0,.03.013l0,0,.008,0,.015,0,.006,0h.082l.015,0h.008l.008,0,.014-.005h0a.136.136,0,0,0,.022-.011l2.848-1.743a.082.082,0,0,0,.046-.065l0-.083a.084.084,0,0,1-.046.06l-2.848,1.744-.023.012h0l-.021.007h0l-.024.005h0l-.025,0h-.034l-.018,0-.015,0-.011,0a.138.138,0,0,1-.03-.013l-4.121-2.358-.01-.006-.01-.008a.1.1,0,0,1-.012-.013l0,0a.048.048,0,0,1-.007-.014v0a.051.051,0,0,1,0-.016Z"
          transform="translate(-190.089 -46.595)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-15"
        x1={-7.237}
        y1={20.055}
        x2={-7.199}
        y2={20.055}
        xlinkHref="#linear-gradient-14"
      />
      <ClipPath id="clip-path-26">
        <Path
          id="Path_67580"
          data-name="Path 67580"
          d="M189.911,33.851l-.052,3.321a.233.233,0,0,0,.105.188l4.148,2.357c.059.033.108,0,.108-.066l.053-3.322a.232.232,0,0,0-.105-.187l-4.148-2.357a.1.1,0,0,0-.047-.014c-.036,0-.062.029-.063.079"
          transform="translate(-189.859 -33.772)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-16"
        x1={-11.616}
        y1={9.515}
        x2={-11.555}
        y2={9.515}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-27">
        <Path
          id="Path_67581"
          data-name="Path 67581"
          d="M189.859,40.592a.233.233,0,0,0,.105.188l4.148,2.357c.059.033.108,0,.109-.066l.007-.426-4.336-4.128Z"
          transform="translate(-189.859 -38.517)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-17"
        x1={-11.824}
        y1={11.889}
        x2={-11.761}
        y2={11.889}
        xlinkHref="#linear-gradient-14"
      />
      <ClipPath id="clip-path-29">
        <Path
          id="Path_67585"
          data-name="Path 67585"
          d="M220.382,40.1c-.007.188.067,1.223.129,2.42s.756,1.324,1.062,1.115.3-.545.415-1.989-.068-2.1-.592-2.45a.5.5,0,0,0-.275-.079c-.33,0-.713.3-.74.983"
          transform="translate(-220.381 -39.115)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-18"
        x1={-13.004}
        y1={12.479}
        x2={-12.943}
        y2={12.479}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-30">
        <Path
          id="Path_67586"
          data-name="Path 67586"
          d="M214.926,51.29a11.525,11.525,0,0,1-2.629.514.777.777,0,0,0-.031,1.038,8.311,8.311,0,0,0,3.057-.316c.974-.421.442-1.269-.186-1.269a.686.686,0,0,0-.211.033"
          transform="translate(-212.086 -51.257)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-19"
        x1={-13.552}
        y1={12.353}
        x2={-13.488}
        y2={12.353}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-32">
        <Path
          id="Path_67591"
          data-name="Path 67591"
          d="M211.848,25.711a1.454,1.454,0,0,0,.641-.2c.246-.123.459-.246.6-.179.289.144.074.292.065.879,0,0,.015.206.071.207.078,0,.129-.21.144-.26.027-.092.216-.377.367-.141a1.088,1.088,0,0,0-1.027-1.653h-.022c-1.117,0-1.269,1.338-.836,1.344"
          transform="translate(-211.624 -24.367)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-20"
        x1={-28.261}
        y1={21.817}
        x2={-28.127}
        y2={21.817}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient-2"
      />
      <ClipPath id="clip-path-33">
        <Rect
          id="Rectangle_8433"
          data-name="Rectangle 8433"
          width={16.401}
          height={26.372}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-34">
        <Path
          id="Path_67594"
          data-name="Path 67594"
          d="M252.5,64.611c-.33.094-.467.235-.468,1.353,0,.425.021.851.061,1.263a1.519,1.519,0,0,0,1.233.106c0-.36,0-.755.005-1.109,0-.717-.053-1.642-.637-1.642a.707.707,0,0,0-.194.029"
          transform="translate(-252.035 -64.582)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-21"
        x1={-41.732}
        y1={16.094}
        x2={-41.566}
        y2={16.094}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-35">
        <Path
          id="Path_67595"
          data-name="Path 67595"
          d="M250.35,80.137c-.582.327-1.762,4.1-1.85,5.258-.039.512.973.762,1.79-.016a10.238,10.238,0,0,0,1.983-3.351c.19-.641.413-2.305-.7-2.305a2.631,2.631,0,0,0-1.22.414"
          transform="translate(-248.499 -79.723)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-22"
        x1={-10.118}
        y1={9.395}
        x2={-10.077}
        y2={9.395}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#00d0ff" />
        <Stop offset={0.5} stopColor="#00a8ec" />
        <Stop offset={1} stopColor="#007fd9" />
      </LinearGradient>
      <ClipPath id="clip-path-37">
        <Path
          id="Path_67597"
          data-name="Path 67597"
          d="M248.542,97.873c.01.468.019.9.074,1.621a2.529,2.529,0,0,0,1.811-.022,8.291,8.291,0,0,0-.05-1.731c-.049-.317-.632-.657-1.128-.657-.386,0-.72.206-.708.79"
          transform="translate(-248.542 -97.083)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-23"
        x1={-34.788}
        y1={14.43}
        x2={-34.648}
        y2={14.43}
        xlinkHref="#linear-gradient-22"
      />
      <ClipPath id="clip-path-39">
        <Path
          id="Path_67599"
          data-name="Path 67599"
          d="M248.42,116.277c0,.852-.016,1.056-.324,1.4s-1.23.507-.347.631,1.2-.091,1.276-.283c.135-.362.508-.518.508-.795,0-.336-.148-.456-.185-.656a2.992,2.992,0,0,1-.045-.38,1.173,1.173,0,0,1-.884.081"
          transform="translate(-247.377 -116.196)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-24"
        x1={-25.726}
        y1={15.563}
        x2={-25.621}
        y2={15.563}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-40">
        <Path
          id="Path_67600"
          data-name="Path 67600"
          d="M256.653,81.547a56.831,56.831,0,0,0,.658,6.207c.14,1.248,1.666.429,1.745-.125s.811-3.945.445-5.152a1.979,1.979,0,0,0-.894-1.3,1.439,1.439,0,0,0-.826-.238c-.52,0-1.028.229-1.129.606"
          transform="translate(-256.629 -80.941)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-25"
        x1={-19.033}
        y1={5.448}
        x2={-18.958}
        y2={5.448}
        xlinkHref="#linear-gradient-22"
      />
      <ClipPath id="clip-path-42">
        <Path
          id="Path_67602"
          data-name="Path 67602"
          d="M258.5,100.874c.113.454.378,1.425.62,2.107a2.189,2.189,0,0,0,1.577-.414c-.093-.432-.138-1.351-.242-1.79-.056-.238-.834-.6-1.4-.6-.395,0-.686.177-.556.7"
          transform="translate(-258.466 -100.177)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-26"
        x1={-25.112}
        y1={12.058}
        x2={-25.014}
        y2={12.058}
        xlinkHref="#linear-gradient-22"
      />
      <ClipPath id="clip-path-44">
        <Path
          id="Path_67604"
          data-name="Path 67604"
          d="M263.722,119.08c.29.8.345,1,.174,1.428s-.985.9-.111.711,1.1-.5,1.1-.7c0-.387.3-.66.207-.92-.115-.316-.294-.379-.4-.553a3.085,3.085,0,0,1-.172-.342,1.174,1.174,0,0,1-.8.377"
          transform="translate(-263.387 -118.703)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-27"
        x1={-23.762}
        y1={10.386}
        x2={-23.671}
        y2={10.386}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-45">
        <Path
          id="Path_67605"
          data-name="Path 67605"
          d="M257.068,52.618a.969.969,0,0,1,.332.7c.089.62.013,1.668.148,2.329.253,1.234.848,1.422,1.334,1.568s.583.9.583.9c.67-1.1-.329-1.549-.432-2.219s.305-2.2-.385-3.116a.992.992,0,0,0-.807-.451,1.342,1.342,0,0,0-.773.293"
          transform="translate(-257.068 -52.325)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-28"
        x1={-21.348}
        y1={8.886}
        x2={-21.264}
        y2={8.886}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-46">
        <Path
          id="Path_67606"
          data-name="Path 67606"
          d="M252.467,63.951c-.155.039-.61.175-.61.175-.174.376-.459.757-.7,1.344s.242,1,.319,1.5c.108.691-.11,2.182-.059,3.166a4.014,4.014,0,0,0,4.143.041c-.327-1.26-1.213-1.531-.948-3.3a3.59,3.59,0,0,0-.1-2.006,2.092,2.092,0,0,0-1.784-.947,1.126,1.126,0,0,0-.267.029"
          transform="translate(-251.095 -63.922)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-29"
        x1={-13.905}
        y1={6.41}
        x2={-13.849}
        y2={6.41}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient"
      />
      <ClipPath id="clip-path-48">
        <Path
          id="Path_67610"
          data-name="Path 67610"
          d="M259.712,65.773c-.786.135-.37,1.162-.035,1.835.108.217.225.433.34.636a2.073,2.073,0,0,0,1.105-.426c-.128-.34-.221-.568-.386-1.006-.33-.878-.588-1.054-.862-1.054a.969.969,0,0,0-.161.016"
          transform="translate(-259.263 -65.757)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-30"
        x1={-27.83}
        y1={17.391}
        x2={-27.721}
        y2={17.391}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient-2"
      />
      <ClipPath id="clip-path-49">
        <Path
          id="Path_67611"
          data-name="Path 67611"
          d="M253.54,53.287a.943.943,0,0,0-1,.945c.027.519.477.657.946.881a1.552,1.552,0,0,0,.848-.014,1.951,1.951,0,0,1,.023.385c-.01.407.487-.873.47-1.208a1.076,1.076,0,0,0-1.2-.993l-.086,0"
          transform="translate(-252.54 -53.285)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-31"
        x1={-28.648}
        y1={19.267}
        x2={-28.534}
        y2={19.267}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-51">
        <Rect
          id="Rectangle_8451"
          data-name="Rectangle 8451"
          width={23.09}
          height={27.543}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-52">
        <Path
          id="Path_67616"
          data-name="Path 67616"
          d="M122.376,44.867a11.365,11.365,0,0,0,2.149,2.021.8.8,0,0,0,.551-.706s-1.109-1.3-1.911-2.042a.779.779,0,0,0-.521-.21c-.382,0-.676.328-.268.937"
          transform="translate(-122.179 -43.93)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-32"
        x1={-7.757}
        y1={12.984}
        x2={-7.692}
        y2={12.984}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-53">
        <Path
          id="Path_67617"
          data-name="Path 67617"
          d="M122.942,37.288A4.242,4.242,0,0,0,121.7,38.94c-.08.256-.124,1.186.92.467a23.562,23.562,0,0,0,2.249-1.8.564.564,0,0,0-.09-.985,1.478,1.478,0,0,0-.415-.066,2.127,2.127,0,0,0-1.419.729"
          transform="translate(-121.66 -36.559)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-33"
        x1={-7.849}
        y1={13.118}
        x2={-7.784}
        y2={13.118}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-54">
        <Path
          id="Path_67618"
          data-name="Path 67618"
          d="M127.519,52.28a1.865,1.865,0,0,0-.369,1.769c.236,1.111.392,3.677.5,4.231.268,1.4,1.731.915,1.876-.013s.472-4.622-.05-5.866c-.108-.257-.551-.358-.99-.358a1.508,1.508,0,0,0-.964.237"
          transform="translate(-127.084 -52.043)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-34"
        x1={-4.247}
        y1={14.761}
        x2={-4.211}
        y2={14.761}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-55">
        <Path
          id="Path_67619"
          data-name="Path 67619"
          d="M124.91,91.065c-.161.419.171.67.571.674.321,0,1.368.294,1.674-.056.226-.259-.2-.425-.644-.5a.856.856,0,0,1-.7-.669l-.905-.368a4.189,4.189,0,0,1,.006.917"
          transform="translate(-124.868 -90.148)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-35"
        x1={-17.63}
        y1={15.702}
        x2={-17.49}
        y2={15.702}
        xlinkHref="#linear-gradient-22"
      />
      <ClipPath id="clip-path-56">
        <Path
          id="Path_67620"
          data-name="Path 67620"
          d="M122,55.323a2.531,2.531,0,0,0-.184,1.861c.182,1.121.61,3.422.668,3.942.116,1.035,1.515,1.192,1.7.272s.087-6.3.087-6.3-.13,0-.328,0a5.029,5.029,0,0,0-1.947.229"
          transform="translate(-121.746 -55.094)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-36"
        x1={-12.235}
        y1={7.173}
        x2={-12.135}
        y2={7.173}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-57">
        <Path
          id="Path_67621"
          data-name="Path 67621"
          d="M124.216,75.48c-.129.4.117,4.494.117,4.494a2.134,2.134,0,0,0,1.2.046c.022-.144.346-3.3.446-4.226.043-.4-.506-.576-1-.576-.364,0-.7.094-.755.262"
          transform="translate(-124.179 -75.218)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-37"
        x1={-6.551}
        y1={21.315}
        x2={-6.496}
        y2={21.315}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-58">
        <Path
          id="Path_67622"
          data-name="Path 67622"
          d="M119.91,88.337c-.212.216-.675.445-.02.967.7.559.911,1.119,1.327,1.1.445-.025.027-.538-.29-1.011a.657.657,0,0,1-.043-.8l-.711-.523-.265.268"
          transform="translate(-119.553 -88.069)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-38"
        x1={-9.657}
        y1={12.804}
        x2={-9.574}
        y2={12.804}
        xlinkHref="#linear-gradient-22"
      />
      <ClipPath id="clip-path-59">
        <Path
          id="Path_67623"
          data-name="Path 67623"
          d="M123.719,73.408c-1.146.839-2.714,4.156-2.714,4.156a2.137,2.137,0,0,0,1,.662c.094-.112,3.024-3.773,2.985-4.221a.872.872,0,0,0-.913-.692.61.61,0,0,0-.355.1"
          transform="translate(-121.005 -73.313)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-39"
        x1={-5.994}
        y1={9.763}
        x2={-5.943}
        y2={9.763}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-61">
        <Path
          id="Path_67626"
          data-name="Path 67626"
          d="M126.938,35.144a4.607,4.607,0,0,1,.417.355,2.016,2.016,0,0,1,.276.768,3.749,3.749,0,0,1,.256.872,1.4,1.4,0,0,1-.186.758c-.19.363-.539.777-.959.722l-.093,1.409a1.977,1.977,0,0,1,.99-.1.543.543,0,0,1,.268.807,1.485,1.485,0,0,1-.914.822l-.073.022A4.461,4.461,0,0,0,129,41.019s-.4-4.106-.381-4.445c.019-.3-.192-1.4-.921-1.45-.1-.006-.188-.009-.275-.009a4.069,4.069,0,0,0-.483.029"
          transform="translate(-126.649 -35.115)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-40"
        x1={-11.05}
        y1={8.586}
        x2={-10.961}
        y2={8.586}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-62">
        <Path
          id="Path_67627"
          data-name="Path 67627"
          d="M130.814,35.3a.366.366,0,0,0,0,.209,10.425,10.425,0,0,1,.307,1.271c.09.594.061,2.876.268,3.61a13.553,13.553,0,0,1,.307,2s.373.106,1.085-.5a19.226,19.226,0,0,1-.7-3.96,5.576,5.576,0,0,0-.362-2.574c-.34-.562-.533-.228-.9-.67a1.383,1.383,0,0,1,0,.613"
          transform="translate(-130.799 -34.687)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-41"
        x1={-12.346}
        y1={7.219}
        x2={-12.251}
        y2={7.219}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-63">
        <Path
          id="Path_67628"
          data-name="Path 67628"
          d="M121.686,33.74c-.236.157.059.283-.6.756a1.156,1.156,0,0,0-.611,1.068c-.1,1.486.139,2.713-.011,4.324A5.306,5.306,0,0,0,120.718,42a3.138,3.138,0,0,0,2.369.163,25.94,25.94,0,0,1-.341-2.737c0-.9-.223-4.346-.223-4.346-.1-.346-.644-.767-.8-1.058s.5-.278.5-.278l.036-.129a.3.3,0,0,0-.06-.005,1.261,1.261,0,0,0-.506.134"
          transform="translate(-120.447 -33.606)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-42"
        x1={-3.341}
        y1={18.45}
        x2={-3.31}
        y2={18.45}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-65">
        <Path
          id="Path_67632"
          data-name="Path 67632"
          d="M116.964,48.222a2.913,2.913,0,0,1,.508.981,3.455,3.455,0,0,0,.352.9c.129.168.393.263.559.4a1.337,1.337,0,0,1,.322.364.461.461,0,0,0,.029-.1s-.921-1.491-1.411-2.367a.571.571,0,0,0-.448-.266.559.559,0,0,1,.089.084"
          transform="translate(-116.875 -48.138)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-43"
        x1={-14.296}
        y1={18.038}
        x2={-14.173}
        y2={18.038}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-67">
        <Path
          id="Path_67634"
          data-name="Path 67634"
          d="M119.827,38.334c-.021.012-.408.157-.424.176-.368.428-.236,1.145-.621,1.578a2.664,2.664,0,0,1-.422.293.786.786,0,0,0-.185.233.822.822,0,0,1,.084.185.582.582,0,0,1-.1.529c.04-.045.081-.094.122-.149.587-.783,1.651-2.5,1.731-2.631.322-.521-.1-.835-.444-.909.206.221.6.494.261.694"
          transform="translate(-118.156 -37.64)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-44"
        x1={-7.691}
        y1={13.809}
        x2={-7.624}
        y2={13.809}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-69">
        <Path
          id="Path_67636"
          data-name="Path 67636"
          d="M126.416,25.693s.264-.041.565.442a.4.4,0,0,0,.528.214.592.592,0,0,1,.387.009c.372.157.224.393.224.393s.412-.351-.042-.855a1.585,1.585,0,0,0-1.049-.583.693.693,0,0,0-.612.38"
          transform="translate(-126.416 -25.313)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-45"
        x1={-16.549}
        y1={41.046}
        x2={-16.418}
        y2={41.046}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-70">
        <Path
          id="Path_67637"
          data-name="Path 67637"
          d="M125.371,26.626s-.387-.08-.4.488.172.563.208.935a1.2,1.2,0,0,0,.657-.358.7.7,0,0,0,.186-.57,1.134,1.134,0,0,0-.6-.513.054.054,0,0,0-.045.019"
          transform="translate(-124.965 -26.607)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-46"
        x1={-18.83}
        y1={36.33}
        x2={-18.677}
        y2={36.33}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-72">
        <Path
          id="Path_67639"
          data-name="Path 67639"
          d="M87.678,79.67a.866.866,0,0,0-.865.892l.045,1.467a.865.865,0,0,1-.669.868,35.981,35.981,0,0,0-4.937,1.541.87.87,0,0,1-.76-.057L77.8,82.8a.866.866,0,0,0-.905.018l-9.683,6.2A.866.866,0,0,0,67.26,90.5l2.535,1.4a.865.865,0,0,1,.337,1.176q-.145.261-.274.519a.861.861,0,0,1-.764.472l-2.864.023a.865.865,0,0,0-.859.866V103.8a.866.866,0,0,0,.866.866l3.244,0a.861.861,0,0,1,.752.435c.179.319.37.626.575.924a.864.864,0,0,1-.165,1.157l-1.561,1.28a.866.866,0,0,0,.133,1.428l9.894,5.42a.865.865,0,0,0,.906-.046l1.889-1.3a.864.864,0,0,1,.762-.109,33.364,33.364,0,0,0,5.167,1.256.87.87,0,0,1,.731.829l.032.873a.866.866,0,0,0,.865.834h12a.866.866,0,0,0,.865-.891l-.038-1.3a.866.866,0,0,1,.68-.87,34.417,34.417,0,0,0,4.92-1.465.869.869,0,0,1,.75.058l2.178,1.267a.866.866,0,0,0,.9-.019l9.949-6.373a.866.866,0,0,0-.11-1.518l-2.092-.947a.863.863,0,0,1-.4-1.2q.134-.243.257-.489a.871.871,0,0,1,.775-.486l3.07-.008a.865.865,0,0,0,.863-.865V93.744a.866.866,0,0,0-.87-.866l-3.417.016a.86.86,0,0,1-.759-.443q-.248-.451-.524-.866a.866.866,0,0,1,.23-1.2l1.6-1.093a.866.866,0,0,0-.072-1.474L110.07,82.259a.865.865,0,0,0-.9.043l-1.934,1.314a.863.863,0,0,1-.75.108,30.182,30.182,0,0,0-5.138-1.138.864.864,0,0,1-.745-.831l-.038-1.247a.865.865,0,0,0-.865-.839Z"
          transform="translate(-65.37 -79.67)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-47"
        x1={-0.311}
        y1={1.186}
        x2={-0.307}
        y2={1.186}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient-2"
      />
      <ClipPath id="clip-path-73">
        <Rect
          id="Rectangle_8473"
          data-name="Rectangle 8473"
          width={68.447}
          height={52.118}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-74">
        <Path
          id="Path_67642"
          data-name="Path 67642"
          d="M254.951,116.485v10.271l3.795-.01V116.474Z"
          transform="translate(-254.951 -116.474)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-48"
        x1={-18.775}
        y1={3.379}
        x2={-18.702}
        y2={3.379}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-76">
        <Path
          id="Path_67645"
          data-name="Path 67645"
          d="M231.485,146.485v10.271l6.1-3.909V142.576Z"
          transform="translate(-231.485 -142.576)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-49"
        x1={-10.601}
        y1={1.935}
        x2={-10.555}
        y2={1.935}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-78">
        <Path
          id="Path_67648"
          data-name="Path 67648"
          d="M187.62,170.263a20.751,20.751,0,0,0,9.432-2.632,24.719,24.719,0,0,1-9.432-7.535Z"
          transform="translate(-187.62 -160.096)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-50"
        x1={-5.559}
        y1={2.218}
        x2={-5.529}
        y2={2.218}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#9f9fc3" />
        <Stop offset={0.5} stopColor="#898ab3" />
        <Stop offset={1} stopColor="#7475a3" />
      </LinearGradient>
      <ClipPath id="clip-path-80">
        <Path
          id="Path_67650"
          data-name="Path 67650"
          d="M122.887,163.634a28.441,28.441,0,0,0,9.79,2.119s-8.564-7.357-9.79-12.39Z"
          transform="translate(-122.887 -153.363)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-51"
        x1={-3.508}
        y1={1.972}
        x2={-3.48}
        y2={1.972}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#7475a3" />
        <Stop offset={0.02} stopColor="#7475a3" />
        <Stop offset={0.49} stopColor="#898ab3" />
        <Stop offset={0.96} stopColor="#9f9fc3" />
        <Stop offset={1} stopColor="#9f9fc3" />
      </LinearGradient>
      <ClipPath id="clip-path-81">
        <Rect
          id="Rectangle_8482"
          data-name="Rectangle 8482"
          width={8.376}
          height={10.271}
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-52"
        x1={-5.269}
        y1={1.946}
        x2={-5.235}
        y2={1.946}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-82">
        <Path
          id="Path_67651"
          data-name="Path 67651"
          d="M94.385,49.515l.082,2.7a33.6,33.6,0,0,0-9.448,2.747l-3.371-1.98-6.1,3.91,3.544,1.965a11.691,11.691,0,0,0-3.429,5.555l-3.545.029v5.091l3.795,0a10.4,10.4,0,0,0,3.766,5.2l-2.461,2.018,6.506,3.564L86.3,78.538a27.981,27.981,0,0,0,9.7,2.119l.085,2.32h8.376l-.075-2.558a33.59,33.59,0,0,0,9.432-2.631l2.827,1.644,6.1-3.909-3.193-1.447a11.762,11.762,0,0,0,3.649-5.838l3.795-.011V63.2l-4.066.019a8.507,8.507,0,0,0-4.047-5.321l2.78-1.9-6.512-3.569-2.619,1.78a30.233,30.233,0,0,0-9.7-2l-.083-2.7Z"
          transform="translate(-72.115 -49.515)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-53"
        x1={-0.367}
        y1={1.597}
        x2={-0.362}
        y2={1.597}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-83">
        <Path
          id="Path_67652"
          data-name="Path 67652"
          d="M84.388,72.137,87.932,74.1a10.631,10.631,0,0,0-.9.9l2.14,2.14L101.5,89.469l8.75,8.751h3.063l-.028-.943L86.679,70.67Z"
          transform="translate(-84.388 -70.67)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-54"
        x1={-0.544}
        y1={1.448}
        x2={-0.536}
        y2={1.448}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={1} />
      </LinearGradient>
      <ClipPath id="clip-path-84">
        <Path
          id="Path_67653"
          data-name="Path 67653"
          d="M75.66,102.663l-3.545.029v5.09l3.795,0a10.4,10.4,0,0,0,3.766,5.2L77.215,115l6.506,3.564,2.583-1.779a25.877,25.877,0,0,0,5.137,1.577l-9.256-9.256L75.677,102.6l-.016.065"
          transform="translate(-72.115 -102.598)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-55"
        x1={-0.766}
        y1={1.925}
        x2={-0.755}
        y2={1.925}
        xlinkHref="#linear-gradient-54"
      />
      <ClipPath id="clip-path-86">
        <Rect
          id="Rectangle_8487"
          data-name="Rectangle 8487"
          width={24.948}
          height={24.087}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-87">
        <Path
          id="Path_67654"
          data-name="Path 67654"
          d="M170.4,60.65l12.008,12.007q-.4.48-.861.945L157.465,49.515h1.805Z"
          transform="translate(-157.465 -49.515)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-56"
        x1={-1.129}
        y1={1.694}
        x2={-1.121}
        y2={1.694}
        xlinkHref="#linear-gradient-54"
      />
      <ClipPath id="clip-path-88">
        <Rect
          id="Rectangle_8489"
          data-name="Rectangle 8489"
          width={33.749}
          height={28.689}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-89">
        <Path
          id="Path_67655"
          data-name="Path 67655"
          d="M158.558,80.075,154.622,82.6l-2.827-1.644q-1.17.534-2.42.975L124.809,57.36a33.332,33.332,0,0,1,7.626-1.977l-.045-1.477,26.168,26.169"
          transform="translate(-124.809 -53.906)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-57"
        x1={-0.673}
        y1={1.357}
        x2={-0.667}
        y2={1.357}
        xlinkHref="#linear-gradient-54"
      />
      <ClipPath id="clip-path-90">
        <Path
          id="Path_67656"
          data-name="Path 67656"
          d="M212.8,63a16.235,16.235,0,0,0-1.543-.6l14.613,14.613,1.4,0V71.985L223.194,72a8.507,8.507,0,0,0-4.046-5.32l2.088-1.427L214.7,61.7Z"
          transform="translate(-211.253 -61.701)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-58"
        x1={-2.555}
        y1={2.445}
        x2={-2.542}
        y2={2.445}
        xlinkHref="#linear-gradient-54"
      />
      <ClipPath id="clip-path-92">
        <Path
          id="Path_67659"
          data-name="Path 67659"
          d="M99.979,86.934a27.116,27.116,0,0,1-6.672-2.827c-4.274-2.586-6.628-5.969-6.628-9.525s2.354-6.937,6.628-9.523a32.6,32.6,0,0,1,16.623-4.15,32.613,32.613,0,0,1,16.623,4.15c4.275,2.583,6.629,5.965,6.629,9.523s-2.355,6.94-6.632,9.523a27.058,27.058,0,0,1-6.672,2.827,38.118,38.118,0,0,1-19.9,0M93.263,64.985c-4.3,2.6-6.67,6.01-6.67,9.6s2.368,7,6.67,9.6a27.21,27.21,0,0,0,6.693,2.837,38.2,38.2,0,0,0,19.946,0,27.136,27.136,0,0,0,6.693-2.836c4.3-2.6,6.673-6.007,6.673-9.6s-2.369-7-6.67-9.6a32.7,32.7,0,0,0-16.668-4.163,32.686,32.686,0,0,0-16.668,4.163"
          transform="translate(-86.593 -60.822)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-94">
        <Rect
          id="Rectangle_8496"
          data-name="Rectangle 8496"
          width={1.469}
          height={0.797}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-95">
        <Path
          id="Path_67660"
          data-name="Path 67660"
          d="M210.98,150.68c.406,0,.734.178.734.4s-.329.4-.734.4-.735-.178-.735-.4.329-.4.735-.4"
          transform="translate(-210.245 -150.68)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-97">
        <Path
          id="Path_67661"
          data-name="Path 67661"
          d="M234.834,137.715c.405,0,.734.178.734.4s-.329.4-.734.4-.735-.178-.735-.4.329-.4.735-.4"
          transform="translate(-234.099 -137.715)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-99">
        <Path
          id="Path_67662"
          data-name="Path 67662"
          d="M250.6,113.348c.406,0,.735.178.735.4s-.329.4-.735.4-.734-.179-.734-.4.329-.4.734-.4"
          transform="translate(-249.867 -113.348)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-101">
        <Path
          id="Path_67663"
          data-name="Path 67663"
          d="M241.766,85.407c.406,0,.734.179.734.4s-.329.4-.734.4-.735-.178-.735-.4.329-.4.735-.4"
          transform="translate(-241.031 -85.407)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-102">
        <Path
          id="Path_67664"
          data-name="Path 67664"
          d="M172.9,158.107c0,.22.329.4.734.4s.735-.179.735-.4-.329-.4-.735-.4-.734.178-.734.4"
          transform="translate(-172.903 -157.709)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-103">
        <Path
          id="Path_67665"
          data-name="Path 67665"
          d="M140.659,155.206c0,.22.329.4.735.4s.735-.178.735-.4-.329-.4-.735-.4-.735.178-.735.4"
          transform="translate(-140.659 -154.808)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-104">
        <Path
          id="Path_67666"
          data-name="Path 67666"
          d="M111.716,145.678c0,.22.329.4.735.4s.734-.178.734-.4-.329-.4-.734-.4-.735.179-.735.4"
          transform="translate(-111.716 -145.28)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-105">
        <Path
          id="Path_67667"
          data-name="Path 67667"
          d="M95.39,133.562c0,.22.329.4.735.4s.735-.178.735-.4-.329-.4-.735-.4-.735.178-.735.4"
          transform="translate(-95.39 -133.163)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-106">
        <Path
          id="Path_67668"
          data-name="Path 67668"
          d="M86.6,96.645c0,.22.329.4.735.4s.735-.178.735-.4-.329-.4-.735-.4-.735.178-.735.4"
          transform="translate(-86.597 -96.246)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-107">
        <Path
          id="Path_67669"
          data-name="Path 67669"
          d="M103.463,77.574c0,.22.329.4.735.4s.734-.178.734-.4-.329-.4-.734-.4-.735.178-.735.4"
          transform="translate(-103.463 -77.176)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-108">
        <Path
          id="Path_67670"
          data-name="Path 67670"
          d="M131,64.82c0,.22.329.4.734.4s.735-.178.735-.4-.329-.4-.735-.4-.734.178-.734.4"
          transform="translate(-131.002 -64.421)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-111">
        <Path
          id="Path_67671"
          data-name="Path 67671"
          d="M185.291,60.739c.406,0,.734.178.734.4s-.329.4-.734.4-.735-.178-.735-.4.329-.4.735-.4"
          transform="translate(-184.556 -60.739)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-113">
        <Path
          id="Path_67672"
          data-name="Path 67672"
          d="M215.977,68.651c.406,0,.734.178.734.4s-.329.4-.734.4-.735-.179-.735-.4.329-.4.735-.4"
          transform="translate(-215.242 -68.651)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-114">
        <Path
          id="Path_67673"
          data-name="Path 67673"
          d="M84.943,117.248c0,.22.329.4.735.4s.734-.178.734-.4-.329-.4-.734-.4-.735.179-.735.4"
          transform="translate(-84.943 -116.85)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-115">
        <Path
          id="Path_67674"
          data-name="Path 67674"
          d="M102.877,87.8a26.084,26.084,0,0,1-6.348-2.638c-4.067-2.412-6.306-5.568-6.306-8.885s2.239-6.47,6.306-8.882a31.505,31.505,0,0,1,15.818-3.872,31.517,31.517,0,0,1,15.817,3.872c4.067,2.41,6.306,5.564,6.306,8.882s-2.241,6.473-6.309,8.882a26.018,26.018,0,0,1-6.348,2.638,36.973,36.973,0,0,1-18.935,0M96.484,67.32c-4.094,2.429-6.348,5.61-6.348,8.956s2.255,6.531,6.348,8.959a26.154,26.154,0,0,0,6.369,2.647,37.056,37.056,0,0,0,18.981,0,26.13,26.13,0,0,0,6.369-2.647c4.1-2.425,6.351-5.606,6.351-8.956s-2.255-6.53-6.348-8.956a31.605,31.605,0,0,0-15.861-3.884A31.591,31.591,0,0,0,96.484,67.32"
          transform="translate(-90.136 -63.436)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-117">
        <Rect
          id="Rectangle_8518"
          data-name="Rectangle 8518"
          width={44.247}
          height={25.705}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-118">
        <Rect
          id="Rectangle_8521"
          data-name="Rectangle 8521"
          width={7.406}
          height={4.055}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-119">
        <Path
          id="Path_67677"
          data-name="Path 67677"
          d="M111.938,128.02c-1.208.219-1.831.431-1.483-.043s-.732-.8-.633-1.214-1.85.158-1.959.093l-2.13,1.6,3.927,2.211,3.432-2.345s.4-.586-1.155-.3"
          transform="translate(-105.733 -126.612)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-120">
        <Path
          id="Path_67678"
          data-name="Path 67678"
          d="M113.747,126.57a5,5,0,0,1-.547.108.082.082,0,0,0-.064,0c-.02.014-.011.039.019.058.07.04.136.031.671-.091a3.285,3.285,0,0,1,1.245-.1h0c.014.008.018.029.012.054-.047.192.115.387.272.575.2.244.549.379.364.631-.119.162-.131.248-.043.307l.02.012c.141.075.416.024,1.04-.1.17-.034.359-.072.564-.11,1.071-.2,1.028.057,1.074.089s.011.114-.016.143,0,.043.033.058a.083.083,0,0,0,.087,0,.153.153,0,0,0-.019-.242c-.118-.084-.122-.334-1.232-.129-.207.038-.4.076-.566.11a3.484,3.484,0,0,1-.9.124s-.038-.042.085-.21c.207-.282-.175-.46-.375-.7-.151-.182-.295-.354-.254-.521a.126.126,0,0,0-.075-.146l-.006,0a.813.813,0,0,0-.381-.072,4.876,4.876,0,0,0-1.005.15"
          transform="translate(-113.125 -126.42)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-59"
        x1={-17.845}
        y1={6.139}
        x2={-17.696}
        y2={6.139}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-121">
        <Path
          id="Path_67679"
          data-name="Path 67679"
          d="M73.689,99.534a4.559,4.559,0,1,0,4.555-4.386,4.473,4.473,0,0,0-4.555,4.386"
          transform="translate(-73.689 -95.148)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-122">
        <Path
          id="Path_67680"
          data-name="Path 67680"
          d="M84.428,106.983a1.556,1.556,0,1,0,1.554-1.5,1.526,1.526,0,0,0-1.554,1.5"
          transform="translate(-84.428 -105.486)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-124">
        <Rect
          id="Rectangle_8527"
          data-name="Rectangle 8527"
          width={9.105}
          height={5.503}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-125">
        <Path
          id="Path_67681"
          data-name="Path 67681"
          d="M164.827,133.114c-1.061-.175-2.234,1.415-3.588.653-1.158-.652,1.2-1.763-.266-2.585-1.651-.928-4.355.728-4.355.728l7.967,4.493c.973-.6.538-.778.2-1.168-.174-.2.051-.4.2-.508.935-.707,1.09-1.434-.156-1.614"
          transform="translate(-156.618 -130.9)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-60"
        x1={-4.629}
        y1={5.097}
        x2={-4.6}
        y2={5.097}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#7e699e" />
        <Stop offset={0.62} stopColor="#3f60ab" />
        <Stop offset={0.99} stopColor="#0058b7" />
        <Stop offset={1} stopColor="#0058b7" />
      </LinearGradient>
      <ClipPath id="clip-path-126">
        <Path
          id="Path_67682"
          data-name="Path 67682"
          d="M156.694,131.852l-.035-.02Zm-.034-.021.034.021.037.02c.109-.058,2.622-1.676,4.252-.76l.018.01c.708.4.385.947.03,1.627-.013.026-.022.055-.032.082-.021.055-.047.107-.071.157-.109.222-.2.413.255.671a1.84,1.84,0,0,0,1.832.01l.133-.053c.433-.17,1.236-.672,1.746-.559a1.621,1.621,0,0,1,.753.35c.283.269-.186.9-.693,1.232-.293.193-.35.357-.177.517.461.426.735.592-.2,1.144l.073.041c.948-.561.672-.743.19-1.188-.15-.138-.089-.293.185-.473.529-.348.965-.958.686-1.275a1.728,1.728,0,0,0-.834-.39c-.545-.12-1.359.385-1.8.559l-.133.053a1.728,1.728,0,0,1-1.724.01c-.4-.228-.32-.4-.213-.616a1.707,1.707,0,0,0,.072-.158l.032-.082c.133-.333.807-1.21-.071-1.68l-.02-.011a2.509,2.509,0,0,0-1.246-.3,6.929,6.929,0,0,0-3.117,1.044"
          transform="translate(-156.658 -130.787)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-61"
        x1={-4.69}
        y1={5.098}
        x2={-4.66}
        y2={5.098}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-128">
        <Rect
          id="Rectangle_8560"
          data-name="Rectangle 8560"
          width={11.881}
          height={6.717}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-129">
        <Rect
          id="Rectangle_8531"
          data-name="Rectangle 8531"
          width={7.981}
          height={4.499}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-130">
        <Path
          id="Path_67685"
          data-name="Path 67685"
          d="M157.788,133.923l7.933,4.472.048-.027-7.935-4.472Z"
          transform="translate(-157.788 -133.896)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-62"
        x1={-5.525}
        y1={6.639}
        x2={-5.49}
        y2={6.639}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-131">
        <Rect
          id="Rectangle_8533"
          data-name="Rectangle 8533"
          width={8.007}
          height={4.509}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-132">
        <Path
          id="Path_67686"
          data-name="Path 67686"
          d="M160.482,132.34l7.959,4.481.048-.027-7.96-4.482Z"
          transform="translate(-160.482 -132.313)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-63"
        x1={-5.601}
        y1={6.723}
        x2={-5.567}
        y2={6.723}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-133">
        <Rect
          id="Rectangle_8535"
          data-name="Rectangle 8535"
          width={8.033}
          height={4.519}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-134">
        <Path
          id="Path_67687"
          data-name="Path 67687"
          d="M163.191,130.749l7.985,4.491.048-.027-7.986-4.492Z"
          transform="translate(-163.191 -130.722)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-64"
        x1={-5.677}
        y1={6.806}
        x2={-5.643}
        y2={6.806}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-135">
        <Rect
          id="Rectangle_8537"
          data-name="Rectangle 8537"
          width={8.059}
          height={4.529}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-136">
        <Path
          id="Path_67688"
          data-name="Path 67688"
          d="M165.915,129.15l8.011,4.5.048-.027-8.012-4.5Z"
          transform="translate(-165.915 -129.122)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-65"
        x1={-5.754}
        y1={6.891}
        x2={-5.719}
        y2={6.891}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-137">
        <Rect
          id="Rectangle_8539"
          data-name="Rectangle 8539"
          width={8.085}
          height={4.539}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-138">
        <Path
          id="Path_67689"
          data-name="Path 67689"
          d="M168.654,127.542l8.037,4.511.049-.027-8.038-4.512Z"
          transform="translate(-168.654 -127.514)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-66"
        x1={-5.83}
        y1={6.974}
        x2={-5.795}
        y2={6.974}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-139">
        <Rect
          id="Rectangle_8541"
          data-name="Rectangle 8541"
          width={7.967}
          height={4.494}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-140">
        <Path
          id="Path_67690"
          data-name="Path 67690"
          d="M156.388,134.745l7.92,4.466.048-.026-7.921-4.467Z"
          transform="translate(-156.388 -134.718)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-67"
        x1={-5.486}
        y1={6.596}
        x2={-5.45}
        y2={6.596}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-141">
        <Rect
          id="Rectangle_8543"
          data-name="Rectangle 8543"
          width={7.993}
          height={4.504}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-142">
        <Path
          id="Path_67691"
          data-name="Path 67691"
          d="M159.075,133.167l7.945,4.477.048-.027-7.947-4.477Z"
          transform="translate(-159.075 -133.14)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-68"
        x1={-5.562}
        y1={6.679}
        x2={-5.527}
        y2={6.679}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-143">
        <Rect
          id="Rectangle_8545"
          data-name="Rectangle 8545"
          width={8.019}
          height={4.513}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-144">
        <Path
          id="Path_67692"
          data-name="Path 67692"
          d="M161.777,131.58l7.971,4.486.048-.027-7.973-4.487Z"
          transform="translate(-161.777 -131.553)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-69"
        x1={-5.638}
        y1={6.763}
        x2={-5.603}
        y2={6.763}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-145">
        <Rect
          id="Rectangle_8547"
          data-name="Rectangle 8547"
          width={8.045}
          height={4.523}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-146">
        <Path
          id="Path_67693"
          data-name="Path 67693"
          d="M164.493,129.985l8,4.5.048-.027-8-4.5Z"
          transform="translate(-164.493 -129.958)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-70"
        x1={-5.714}
        y1={6.847}
        x2={-5.679}
        y2={6.847}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-147">
        <Rect
          id="Rectangle_8549"
          data-name="Rectangle 8549"
          width={8.072}
          height={4.533}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-148">
        <Path
          id="Path_67694"
          data-name="Path 67694"
          d="M167.224,128.382l8.023,4.506.049-.027-8.025-4.506Z"
          transform="translate(-167.224 -128.354)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-71"
        x1={-5.79}
        y1={6.931}
        x2={-5.755}
        y2={6.931}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-149">
        <Rect
          id="Rectangle_8551"
          data-name="Rectangle 8551"
          width={3.826}
          height={2.215}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-150">
        <Path
          id="Path_67695"
          data-name="Path 67695"
          d="M162.7,133.166l.085.048,3.74-2.166-.086-.049Z"
          transform="translate(-162.698 -130.999)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-72"
        x1={-11.885}
        y1={13.85}
        x2={-11.812}
        y2={13.85}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-151">
        <Rect
          id="Rectangle_8553"
          data-name="Rectangle 8553"
          width={3.895}
          height={2.19}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-152">
        <Path
          id="Path_67696"
          data-name="Path 67696"
          d="M178,141.864l.086.048,3.809-2.141-.087-.049Z"
          transform="translate(-178 -139.723)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-73"
        x1={-12.773}
        y1={12.898}
        x2={-12.701}
        y2={12.898}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-153">
        <Rect
          id="Rectangle_8555"
          data-name="Rectangle 8555"
          width={3.923}
          height={2.179}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-154">
        <Path
          id="Path_67697"
          data-name="Path 67697"
          d="M184.232,145.407l.086.049,3.837-2.13-.087-.049Z"
          transform="translate(-184.232 -143.276)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-74"
        x1={-13.125}
        y1={12.503}
        x2={-13.053}
        y2={12.503}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-155">
        <Rect
          id="Rectangle_8557"
          data-name="Rectangle 8557"
          width={3.794}
          height={2.227}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-156">
        <Path
          id="Path_67698"
          data-name="Path 67698"
          d="M155.755,129.22l.085.048,3.709-2.178-.086-.048Z"
          transform="translate(-155.755 -127.041)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-75"
        x1={-11.472}
        y1={14.276}
        x2={-11.398}
        y2={14.276}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-157">
        <Rect
          id="Rectangle_8559"
          data-name="Rectangle 8559"
          width={3.865}
          height={2.205}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-158">
        <Path
          id="Path_67699"
          data-name="Path 67699"
          d="M170.361,137.515l.086.048,3.779-2.156-.087-.049Z"
          transform="translate(-170.361 -135.358)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-76"
        x1={-12.319}
        y1={13.361}
        x2={-12.247}
        y2={13.361}
        xlinkHref="#linear-gradient-4"
      />
      <ClipPath id="clip-path-159">
        <Path
          id="Path_67700"
          data-name="Path 67700"
          d="M181.74,79.575l.383.205.065-.034-.383-.205Z"
          transform="translate(-181.74 -79.541)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-77"
        x1={-113.445}
        y1={188.358}
        x2={-112.821}
        y2={188.358}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#4293e0" />
        <Stop offset={0.51} stopColor="#8fbeef" />
        <Stop offset={1} stopColor="#dbe9ff" />
      </LinearGradient>
      <ClipPath id="clip-path-160">
        <Path
          id="Path_67701"
          data-name="Path 67701"
          d="M200.414,71.211l.587.313.05-.026-.587-.313Z"
          transform="translate(-200.414 -71.185)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-78"
        x1={-87.94}
        y1={139.926}
        x2={-87.502}
        y2={139.926}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#08339f" />
        <Stop offset={0.62} stopColor="#1b4aae" />
        <Stop offset={0.99} stopColor="#2e62be" />
        <Stop offset={1} stopColor="#2e62be" />
      </LinearGradient>
      <ClipPath id="clip-path-161">
        <Path
          id="Path_67702"
          data-name="Path 67702"
          d="M200.087,71.382l.832.444.05-.026-.833-.444Z"
          transform="translate(-200.087 -71.356)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-79"
        x1={-63.399}
        y1={100.784}
        x2={-63.082}
        y2={100.784}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-162">
        <Path
          id="Path_67703"
          data-name="Path 67703"
          d="M209.113,75.846l.694.37.051-.026-.695-.37Z"
          transform="translate(-209.113 -75.82)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-80"
        x1={-78.437}
        y1={116.413}
        x2={-78.062}
        y2={116.413}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-163">
        <Path
          id="Path_67704"
          data-name="Path 67704"
          d="M208.779,76.017l.444.236.051-.026-.444-.236Z"
          transform="translate(-208.779 -75.991)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-81"
        x1={-118.021}
        y1={175.673}
        x2={-117.456}
        y2={175.673}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-164">
        <Path
          id="Path_67705"
          data-name="Path 67705"
          d="M218.131,80.653l.433.231.051-.025-.433-.231Z"
          transform="translate(-218.131 -80.628)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-82"
        x1={-125.724}
        y1={174.645}
        x2={-125.148}
        y2={174.645}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-165">
        <Path
          id="Path_67706"
          data-name="Path 67706"
          d="M217.791,80.821l.5.269.052-.025-.5-.269Z"
          transform="translate(-217.791 -80.796)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-83"
        x1={-109.389}
        y1={151.781}
        x2={-108.886}
        y2={151.781}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-166">
        <Path
          id="Path_67707"
          data-name="Path 67707"
          d="M227.058,85.412l.636.339.053-.025-.636-.339Z"
          transform="translate(-227.058 -85.387)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-84"
        x1={-92.15}
        y1={119.165}
        x2={-91.744}
        y2={119.165}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-167">
        <Path
          id="Path_67708"
          data-name="Path 67708"
          d="M226.712,85.578l.509.271.053-.025-.509-.271Z"
          transform="translate(-226.712 -85.553)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-85"
        x1={-112.905}
        y1={146.435}
        x2={-112.407}
        y2={146.435}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-168">
        <Path
          id="Path_67709"
          data-name="Path 67709"
          d="M235.99,90.173l.383.2.053-.025-.383-.2Z"
          transform="translate(-235.99 -90.148)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-86"
        x1={-151.276}
        y1={183.917}
        x2={-150.635}
        y2={183.917}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-169">
        <Path
          id="Path_67710"
          data-name="Path 67710"
          d="M235.637,90.337l.306.163.053-.025-.306-.163Z"
          transform="translate(-235.637 -90.312)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-87"
        x1={-183.227}
        y1={223.576}
        x2={-182.449}
        y2={223.576}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-170">
        <Path
          id="Path_67711"
          data-name="Path 67711"
          d="M190.385,84.214l.386.207.065-.033-.386-.207Z"
          transform="translate(-190.385 -84.181)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-88"
        x1={-117.812}
        y1={181.878}
        x2={-117.193}
        y2={181.878}
        xlinkHref="#linear-gradient-77"
      />
      <ClipPath id="clip-path-171">
        <Path
          id="Path_67712"
          data-name="Path 67712"
          d="M199.156,88.921l.389.208.067-.033-.389-.209Z"
          transform="translate(-199.156 -88.888)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-89"
        x1={-122.033}
        y1={175.595}
        x2={-121.42}
        y2={175.595}
        xlinkHref="#linear-gradient-77"
      />
      <ClipPath id="clip-path-172">
        <Path
          id="Path_67713"
          data-name="Path 67713"
          d="M207.932,93.631l.392.21.068-.032L208,93.6Z"
          transform="translate(-207.932 -93.598)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-90"
        x1={-126.326}
        y1={169.367}
        x2={-125.718}
        y2={169.367}
        xlinkHref="#linear-gradient-77"
      />
      <ClipPath id="clip-path-173">
        <Path
          id="Path_67714"
          data-name="Path 67714"
          d="M216.772,98.375l.395.212.07-.032-.395-.212Z"
          transform="translate(-216.772 -98.343)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-91"
        x1={-130.428}
        y1={163.15}
        x2={-129.826}
        y2={163.15}
        xlinkHref="#linear-gradient-77"
      />
      <ClipPath id="clip-path-175">
        <Rect
          id="Rectangle_8584"
          data-name="Rectangle 8584"
          width={13.086}
          height={6.438}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-176">
        <Rect
          id="Rectangle_8578"
          data-name="Rectangle 8578"
          width={12.994}
          height={6.393}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-177">
        <Path
          id="Path_67716"
          data-name="Path 67716"
          d="M191.755,78.477c-.5-.559-2.713-1.712-3.432-2.3a7.007,7.007,0,0,0-2.59-.786l-2.406,1.166,9.832,5.227,3.162-1.506a5.212,5.212,0,0,0-2.329-.937c-1.277-.3-1.739-.3-2.236-.862"
          transform="translate(-183.326 -75.388)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-92"
        x1={-3.584}
        y1={5.138}
        x2={-3.564}
        y2={5.138}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#c47aaa" />
        <Stop offset={0.62} stopColor="#64609f" />
        <Stop offset={0.99} stopColor="#054794" />
        <Stop offset={1} stopColor="#054794" />
      </LinearGradient>
      <ClipPath id="clip-path-178">
        <Path
          id="Path_67717"
          data-name="Path 67717"
          d="M200.067,79.206c-.219-.051-.416-.094-.59-.131-.833-.181-1.212-.263-1.613-.713a11.438,11.438,0,0,0-1.918-1.315,16.315,16.315,0,0,1-1.519-.991,4.775,4.775,0,0,0-2.014-.678,3.019,3.019,0,0,1-.594-.136h0a.074.074,0,0,0-.057-.006c-.013.007-.01.02.009.03h0a2.845,2.845,0,0,0,.641.152,4.584,4.584,0,0,1,1.947.65,16.289,16.289,0,0,0,1.53,1,11.491,11.491,0,0,1,1.9,1.3,1.734,1.734,0,0,0,.49.394,4.682,4.682,0,0,0,1.192.354c.173.037.369.08.587.131,1.95.452,2.34.965,2.343.97a.074.074,0,0,0,.056.022c.022,0,.033-.01.025-.022s-.406-.544-2.414-1.009"
          transform="translate(-191.753 -75.23)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-93"
        x1={-6.616}
        y1={4.21}
        x2={-6.583}
        y2={4.21}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-179">
        <Path
          id="Path_67718"
          data-name="Path 67718"
          d="M189.646,80.487a6.209,6.209,0,0,1-2.27-1.3,8.408,8.408,0,0,0-.928-.7,9.089,9.089,0,0,0-1.958-.969l-1.165.571,9.832,5.227,1.153-.56a8.359,8.359,0,0,0-1.984-1.226c-.8-.37-1.718-.7-2.681-1.043"
          transform="translate(-183.326 -77.518)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-94"
        x1={-4.664}
        y1={7.869}
        x2={-4.639}
        y2={7.869}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#b97596" />
        <Stop offset={0.62} stopColor="#5d5695" />
        <Stop offset={0.99} stopColor="#003894" />
        <Stop offset={1} stopColor="#003894" />
      </LinearGradient>
      <ClipPath id="clip-path-180">
        <Path
          id="Path_67719"
          data-name="Path 67719"
          d="M195.335,81.468c-.793-.365-1.692-.688-2.639-1.028l-.049-.018a6.16,6.16,0,0,1-2.251-1.288,8.465,8.465,0,0,0-.932-.706,10.059,10.059,0,0,0-1.457-.782,4.405,4.405,0,0,0-.521-.2l-.014.037a4.33,4.33,0,0,1,.5.189,9.881,9.881,0,0,1,1.438.771,8.389,8.389,0,0,1,.922.7,6.242,6.242,0,0,0,1.159.82,8.377,8.377,0,0,0,1.13.489l.049.018c.943.339,1.838.66,2.625,1.023a7.9,7.9,0,0,1,2.014,1.257.083.083,0,0,0,.059.016c.02,0,.025-.014.012-.026a8.012,8.012,0,0,0-2.043-1.275"
          transform="translate(-187.471 -77.451)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-95"
        x1={-5.282}
        y1={8.578}
        x2={-5.254}
        y2={8.578}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-181">
        <Rect
          id="Rectangle_8583"
          data-name="Rectangle 8583"
          width={9.906}
          height={5.317}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-182">
        <Path
          id="Path_67720"
          data-name="Path 67720"
          d="M194.635,81.807c-.792-.365-1.69-.688-2.636-1.028l-.049-.018a6.151,6.151,0,0,1-2.249-1.288,8.491,8.491,0,0,0-.932-.705,10.033,10.033,0,0,0-1.456-.782,4.382,4.382,0,0,0-.521-.2l-.014.037a4.317,4.317,0,0,1,.5.189,9.918,9.918,0,0,1,1.436.771,8.41,8.41,0,0,1,.922.7,6.212,6.212,0,0,0,1.158.819,8.372,8.372,0,0,0,1.129.489l.049.018c.942.339,1.836.66,2.623,1.023a7.9,7.9,0,0,1,2.012,1.256.083.083,0,0,0,.059.016c.02,0,.025-.014.013-.026a8,8,0,0,0-2.041-1.274"
          transform="translate(-186.778 -77.791)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-96"
        x1={-5.267}
        y1={8.564}
        x2={-5.238}
        y2={8.564}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#ff5900" />
        <Stop offset={0.62} stopColor="#802d00" />
        <Stop offset={0.99} />
        <Stop offset={1} />
      </LinearGradient>
      <ClipPath id="clip-path-183">
        <Path
          id="Path_67726"
          data-name="Path 67726"
          d="M186.1,99.542c-.058.038-.037.115.048.173a.262.262,0,0,0,.258.036.066.066,0,0,0,.03-.043l.58.761.023-.031-.605-.766a.18.18,0,0,0-.077-.093.334.334,0,0,0-.115-.049l-.081-.006a.135.135,0,0,0-.061.019m.061-.019h.024l-.62-.045Zm-6.579-2.813a.241.241,0,0,0,.041.035.293.293,0,0,0,.046.026l.227,1.078a.153.153,0,0,0-.085.02c-.058.037-.036.115.048.173a.262.262,0,0,0,.257.036.066.066,0,0,0,.032-.058l2.211.083a.221.221,0,0,0,.058.057.325.325,0,0,0,.058.031l-.722.73a.173.173,0,0,0-.117.018c-.058.038-.036.115.048.173a.261.261,0,0,0,.257.036.064.064,0,0,0,.032-.05l1.731.147a.221.221,0,0,0,.059.058.328.328,0,0,0,.161.056l1.639.118-1.585-.122a.123.123,0,0,0,.042-.016c.058-.038.036-.115-.048-.173a.263.263,0,0,0-.258-.036.066.066,0,0,0-.03.075l-1.719-.146a.191.191,0,0,0-.073-.084.329.329,0,0,0-.082-.04l.721-.726a.2.2,0,0,0,.141-.013c.058-.037.036-.115-.048-.172a.263.263,0,0,0-.257-.037.067.067,0,0,0-.03.077l-2.2-.083a.2.2,0,0,0-.07-.076.339.339,0,0,0-.115-.049l-.227-1.064a.2.2,0,0,0,.153-.011c.058-.038.036-.115-.048-.173a.337.337,0,0,0-.139-.054Zm-.007-.137a.07.07,0,0,0-.021.1l.084-.118a.138.138,0,0,0-.063.02m-1.7-.667.02-.006Zm1.764.648a.252.252,0,0,1,.056,0l.8-1.113a.242.242,0,0,1-.056,0Zm.852-1.111a.138.138,0,0,0,.067-.02.071.071,0,0,0,.02-.1Zm-2.562.438-.013.01a.1.1,0,0,1-.021.01l2.336-.667a.078.078,0,0,1,.021-.02l.006,0Zm2.3-.646c-.028.041,0,.1.069.152a.336.336,0,0,0,.135.053l.113-.158a.256.256,0,0,0-.038-.032.33.33,0,0,0-.144-.055Zm.027-.024.053-.015a.134.134,0,0,0-.053.015m-2.486-.461-.192.974c-.01.04.018.091.078.132a.32.32,0,0,0,.166.056l.1-.03c.041-.04.016-.11-.061-.162a.262.262,0,0,0-.257-.036.057.057,0,0,0-.012.011l.209-.966Z"
          transform="translate(-177.573 -94.726)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-97"
        x1={-5.239}
        y1={7.108}
        x2={-5.21}
        y2={7.108}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-185">
        <Path
          id="Path_67728"
          data-name="Path 67728"
          d="M170.267,94.1l3.132-1.732,9.98,5.367-3.2,1.726Zm-.03-.01-.019.011,9.956,5.385.005,0,3.231-1.743.019-.01L173.4,92.347l-.006,0Z"
          transform="translate(-170.218 -92.344)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-98"
        x1={-3.601}
        y1={5.804}
        x2={-3.58}
        y2={5.804}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#0055b4" />
        <Stop offset={0.5} stopColor="#809093" />
        <Stop offset={1} stopColor="#ffca71" />
      </LinearGradient>
      <ClipPath id="clip-path-186">
        <Path
          id="Path_67729"
          data-name="Path 67729"
          d="M201.864,111.1l.011.021,3.225-1.74-.011-.021Z"
          transform="translate(-201.864 -109.357)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-99"
        x1={-17.435}
        y1={20.86}
        x2={-17.349}
        y2={20.86}
        xlinkHref="#linear-gradient-98"
      />
      <ClipPath id="clip-path-187">
        <Rect
          id="Rectangle_8591"
          data-name="Rectangle 8591"
          width={3.664}
          height={0.024}
          transform="matrix(0.88, -0.475, 0.475, 0.88, 0, 1.742)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-100"
        x1={-16.977}
        y1={21.291}
        x2={-16.89}
        y2={21.291}
        xlinkHref="#linear-gradient-98"
      />
      <ClipPath id="clip-path-188">
        <Path
          id="Path_67730"
          data-name="Path 67730"
          d="M191.5,105.487l.011.021,3.225-1.74-.011-.02Z"
          transform="translate(-191.503 -103.747)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-101"
        x1={-16.54}
        y1={21.751}
        x2={-16.454}
        y2={21.751}
        xlinkHref="#linear-gradient-98"
      />
      <ClipPath id="clip-path-189">
        <Path
          id="Path_67731"
          data-name="Path 67731"
          d="M186.056,102.679l.011.02,3.225-1.74-.011-.021Z"
          transform="translate(-186.056 -100.939)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-102"
        x1={-16.068}
        y1={22.196}
        x2={-15.982}
        y2={22.196}
        xlinkHref="#linear-gradient-98"
      />
      <ClipPath id="clip-path-190">
        <Path
          id="Path_67732"
          data-name="Path 67732"
          d="M180.962,99.919l.011.021L184.2,98.2l-.011-.021Z"
          transform="translate(-180.962 -98.179)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-103"
        x1={-15.627}
        y1={22.634}
        x2={-15.541}
        y2={22.634}
        xlinkHref="#linear-gradient-98"
      />
      <ClipPath id="clip-path-191">
        <Path
          id="Path_67733"
          data-name="Path 67733"
          d="M175.276,96.848l.011.02,3.225-1.74-.011-.021Z"
          transform="translate(-175.276 -95.108)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-104"
        x1={-15.139}
        y1={23.122}
        x2={-15.052}
        y2={23.122}
        xlinkHref="#linear-gradient-98"
      />
      <ClipPath id="clip-path-193">
        <Rect
          id="Rectangle_8676"
          data-name="Rectangle 8676"
          width={6.586}
          height={4.399}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-194">
        <Path
          id="Path_67734"
          data-name="Path 67734"
          d="M140.274,107.869l.565.315.566-.315-.566-.315Zm.565.292-.525-.292.525-.293.525.293Z"
          transform="translate(-140.274 -107.554)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-3"
        cx={-1.79}
        cy={2.815}
        r={5.913}
        gradientTransform="translate(-15.374) scale(0.556 1)"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={0.04} stopColor="#fff" />
        <Stop offset={0.51} stopColor="gray" />
        <Stop offset={0.98} />
        <Stop offset={1} />
      </RadialGradient>
      <ClipPath id="clip-path-195">
        <Path
          id="Path_67735"
          data-name="Path 67735"
          d="M136.371,107.869l.565.315.565-.315-.565-.315Zm.565.292-.526-.292.526-.292.525.292Z"
          transform="translate(-136.371 -107.554)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-4"
        cx={-0.826}
        cy={2.815}
        r={5.882}
        gradientTransform="translate(-14.945) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-196">
        <Path
          id="Path_67736"
          data-name="Path 67736"
          d="M138.322,108.955l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.292.525.292Z"
          transform="translate(-138.322 -108.64)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-5"
        cx={-1.308}
        cy={2.332}
        r={5.918}
        gradientTransform="translate(-15.16) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-197">
        <Path
          id="Path_67737"
          data-name="Path 67737"
          d="M140.274,110.041l.566.315.565-.315-.565-.314Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-140.274 -109.727)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-6"
        cx={-1.79}
        cy={1.851}
        r={5.938}
        gradientTransform="translate(-15.382) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-198">
        <Path
          id="Path_67738"
          data-name="Path 67738"
          d="M132.467,107.869l.565.315.565-.315-.565-.315Zm.565.292-.525-.292.525-.292.526.292Z"
          transform="translate(-132.467 -107.554)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-7"
        cx={0.139}
        cy={2.815}
        r={5.803}
        gradientTransform="translate(-14.517) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-199">
        <Path
          id="Path_67739"
          data-name="Path 67739"
          d="M134.418,108.955l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-134.418 -108.64)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-8"
        cx={-0.343}
        cy={2.332}
        r={5.879}
        gradientTransform="translate(-14.733) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-200">
        <Path
          id="Path_67740"
          data-name="Path 67740"
          d="M136.371,110.041l.565.315.565-.315-.565-.314Zm.565.293-.526-.293.526-.292.525.292Z"
          transform="translate(-136.371 -109.727)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-9"
        cx={-0.826}
        cy={1.851}
        r={5.926}
        gradientTransform="translate(-14.953) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-201">
        <Path
          id="Path_67741"
          data-name="Path 67741"
          d="M138.322,111.127l.566.315.565-.315-.565-.315Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-138.322 -110.812)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-10"
        cx={-1.308}
        cy={1.368}
        r={5.941}
        gradientTransform="translate(-15.16) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-202">
        <Path
          id="Path_67742"
          data-name="Path 67742"
          d="M140.274,112.213l.566.315.565-.315-.565-.314Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-140.274 -111.899)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-11"
        cx={-1.79}
        cy={0.886}
        r={5.947}
        gradientTransform="translate(-15.382) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-203">
        <Path
          id="Path_67743"
          data-name="Path 67743"
          d="M128.562,107.869l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-128.562 -107.554)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-12"
        cx={1.103}
        cy={2.815}
        r={5.732}
        gradientTransform="translate(-14.091) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-204">
        <Path
          id="Path_67744"
          data-name="Path 67744"
          d="M130.515,108.955l.565.315.566-.315-.566-.315Zm.565.292-.525-.292.525-.292.525.292Z"
          transform="translate(-130.515 -108.64)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-13"
        cx={0.621}
        cy={2.332}
        r={5.759}
        gradientTransform="translate(-14.304) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-205">
        <Path
          id="Path_67745"
          data-name="Path 67745"
          d="M132.467,110.041l.565.315.565-.315-.565-.314Zm.565.293-.525-.293.525-.292.526.292Z"
          transform="translate(-132.467 -109.727)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-14"
        cx={0.139}
        cy={1.851}
        r={5.875}
        gradientTransform="translate(-14.525) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-206">
        <Path
          id="Path_67746"
          data-name="Path 67746"
          d="M134.418,111.127l.566.315.566-.315-.566-.315Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-134.418 -110.812)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-15"
        cx={-0.343}
        cy={1.368}
        r={5.933}
        gradientTransform="translate(-14.733) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-207">
        <Path
          id="Path_67747"
          data-name="Path 67747"
          d="M136.371,112.213l.565.315.565-.315-.565-.314Zm.565.293-.526-.293.526-.292.525.292Z"
          transform="translate(-136.371 -111.899)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-16"
        cx={-0.826}
        cy={0.886}
        r={5.947}
        gradientTransform="translate(-14.953) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-208">
        <Path
          id="Path_67748"
          data-name="Path 67748"
          d="M138.322,113.3l.566.315.565-.315-.565-.314Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-138.322 -112.985)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-17"
        cx={-1.308}
        cy={0.403}
        r={5.945}
        gradientTransform="translate(-15.168) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-209">
        <Path
          id="Path_67749"
          data-name="Path 67749"
          d="M140.274,114.385l.566.315.565-.315-.565-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-140.274 -114.071)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-18"
        cx={-1.79}
        cy={-0.079}
        r={5.94}
        gradientTransform="translate(-15.382) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-210">
        <Path
          id="Path_67750"
          data-name="Path 67750"
          d="M124.659,107.869l.566.315.566-.315-.566-.315Zm.566.292-.526-.292.526-.292.525.292Z"
          transform="translate(-124.659 -107.554)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-19"
        cx={2.068}
        cy={2.815}
        r={5.833}
        gradientTransform="translate(-13.663) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-211">
        <Path
          id="Path_67751"
          data-name="Path 67751"
          d="M126.611,108.955l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.292.525.292Z"
          transform="translate(-126.611 -108.64)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-20"
        cx={1.586}
        cy={2.332}
        r={5.802}
        gradientTransform="translate(-13.876) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-212">
        <Path
          id="Path_67752"
          data-name="Path 67752"
          d="M128.562,110.041l.566.315.566-.315-.566-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-128.562 -109.727)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-21"
        cx={1.103}
        cy={1.851}
        r={5.744}
        gradientTransform="translate(-14.099) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-213">
        <Path
          id="Path_67753"
          data-name="Path 67753"
          d="M130.515,111.127l.565.315.566-.315-.566-.315Zm.565.293-.525-.293.525-.292.525.292Z"
          transform="translate(-130.515 -110.812)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-22"
        cx={0.621}
        cy={1.368}
        r={5.847}
        gradientTransform="translate(-14.304) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-214">
        <Path
          id="Path_67754"
          data-name="Path 67754"
          d="M132.467,112.213l.565.315.565-.315-.565-.314Zm.565.293-.525-.293.525-.292.526.292Z"
          transform="translate(-132.467 -111.899)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-23"
        cx={0.139}
        cy={0.886}
        r={5.947}
        gradientTransform="translate(-14.525) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-215">
        <Path
          id="Path_67755"
          data-name="Path 67755"
          d="M134.418,113.3l.566.315.566-.315-.566-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-134.418 -112.985)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-24"
        cx={-0.343}
        cy={0.403}
        r={5.941}
        gradientTransform="translate(-14.741) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-216">
        <Path
          id="Path_67756"
          data-name="Path 67756"
          d="M136.371,114.385l.565.315.565-.315-.565-.314Zm.565.293-.526-.293.526-.292.525.292Z"
          transform="translate(-136.371 -114.071)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-25"
        cx={-0.826}
        cy={-0.079}
        r={5.931}
        gradientTransform="translate(-14.953) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-217">
        <Path
          id="Path_67757"
          data-name="Path 67757"
          d="M138.323,115.472l.565.315.565-.315-.565-.315Zm.565.292-.525-.292.525-.292.525.292Z"
          transform="translate(-138.323 -115.157)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-26"
        cx={-1.309}
        cy={-0.562}
        r={5.919}
        gradientTransform="translate(-15.159) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-218">
        <Path
          id="Path_67758"
          data-name="Path 67758"
          d="M140.274,116.558l.566.315.565-.315-.565-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-140.274 -116.243)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-27"
        cx={-1.79}
        cy={-1.044}
        r={5.917}
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-219">
        <Path
          id="Path_67759"
          data-name="Path 67759"
          d="M120.755,107.869l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.292.525.292Z"
          transform="translate(-120.755 -107.554)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-28"
        cx={3.033}
        cy={2.815}
        r={5.894}
        gradientTransform="translate(-13.234) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-220">
        <Path
          id="Path_67760"
          data-name="Path 67760"
          d="M122.707,108.955l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.292.525.292Z"
          transform="translate(-122.707 -108.64)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-29"
        cx={2.55}
        cy={2.332}
        r={5.895}
        gradientTransform="translate(-13.448) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-221">
        <Path
          id="Path_67761"
          data-name="Path 67761"
          d="M124.659,110.041l.566.315.566-.315-.566-.314Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-124.659 -109.727)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-30"
        cx={2.068}
        cy={1.851}
        r={5.9}
        gradientTransform="translate(-13.671) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-222">
        <Path
          id="Path_67762"
          data-name="Path 67762"
          d="M126.611,111.127l.566.315.565-.315-.565-.315Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-126.611 -110.812)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-31"
        cx={1.586}
        cy={1.368}
        r={5.901}
        gradientTransform="translate(-13.876) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-223">
        <Path
          id="Path_67763"
          data-name="Path 67763"
          d="M128.562,112.213l.566.315.566-.315-.566-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-128.562 -111.899)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-32"
        cx={1.103}
        cy={0.886}
        r={5.932}
        gradientTransform="translate(-14.099) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-224">
        <Path
          id="Path_67764"
          data-name="Path 67764"
          d="M130.515,113.3l.565.315.566-.315-.566-.314Zm.565.293-.525-.293.525-.292.525.292Z"
          transform="translate(-130.515 -112.985)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-33"
        cx={0.621}
        cy={0.403}
        r={5.878}
        gradientTransform="translate(-14.312) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-225">
        <Path
          id="Path_67765"
          data-name="Path 67765"
          d="M132.467,114.385l.565.315.565-.315-.565-.314Zm.565.293-.525-.293.525-.292.526.292Z"
          transform="translate(-132.467 -114.071)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-34"
        cx={0.139}
        cy={-0.079}
        r={5.887}
        gradientTransform="translate(-14.525) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-226">
        <Path
          id="Path_67766"
          data-name="Path 67766"
          d="M134.418,115.472l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.526.292Z"
          transform="translate(-134.418 -115.157)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-35"
        cx={-0.343}
        cy={-0.562}
        r={5.888}
        gradientTransform="translate(-14.733) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-227">
        <Path
          id="Path_67767"
          data-name="Path 67767"
          d="M136.371,116.558l.565.315.565-.315-.565-.315Zm.565.292-.526-.292.526-.292.525.292Z"
          transform="translate(-136.371 -116.243)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-36"
        cx={-0.826}
        cy={-1.044}
        r={5.889}
        gradientTransform="translate(-14.945) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-228">
        <Path
          id="Path_67768"
          data-name="Path 67768"
          d="M138.322,117.644l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-138.322 -117.329)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-37"
        cx={-1.308}
        cy={-1.526}
        r={5.889}
        gradientTransform="translate(-15.161) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-229">
        <Path
          id="Path_67769"
          data-name="Path 67769"
          d="M140.274,118.73l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.293.525.293Z"
          transform="translate(-140.274 -118.415)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-38"
        cx={-1.79}
        cy={-2.008}
        r={5.89}
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-230">
        <Path
          id="Path_67770"
          data-name="Path 67770"
          d="M120.755,110.041l.566.315.565-.315-.565-.314Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-120.755 -109.727)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-39"
        cx={3.033}
        cy={1.851}
        r={5.931}
        gradientTransform="translate(-13.242) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-231">
        <Path
          id="Path_67771"
          data-name="Path 67771"
          d="M122.707,111.127l.566.315.565-.315-.565-.315Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-122.707 -110.812)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-40"
        cx={2.55}
        cy={1.368}
        r={5.937}
        gradientTransform="translate(-13.448) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-232">
        <Path
          id="Path_67772"
          data-name="Path 67772"
          d="M124.659,112.213l.566.315.566-.315-.566-.314Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-124.659 -111.899)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-41"
        cx={2.068}
        cy={0.886}
        r={5.947}
        gradientTransform="translate(-13.671) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-233">
        <Path
          id="Path_67773"
          data-name="Path 67773"
          d="M126.611,113.3l.566.315.565-.315-.566-.314Zm.566.293-.526-.293.525-.292.526.292Z"
          transform="translate(-126.611 -112.985)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-42"
        cx={1.586}
        cy={0.403}
        r={5.919}
        gradientTransform="translate(-13.884) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-234">
        <Path
          id="Path_67774"
          data-name="Path 67774"
          d="M128.562,114.385l.566.315.566-.315-.566-.314Zm.566.293-.525-.293.525-.292.526.292Z"
          transform="translate(-128.562 -114.071)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-43"
        cx={1.103}
        cy={-0.079}
        r={5.746}
        gradientTransform="translate(-14.099) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-235">
        <Path
          id="Path_67775"
          data-name="Path 67775"
          d="M130.515,115.472l.565.315.566-.315-.566-.315Zm.565.292-.525-.292.525-.293.525.293Z"
          transform="translate(-130.515 -115.157)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-44"
        cx={0.621}
        cy={-0.562}
        r={5.765}
        gradientTransform="translate(-14.304) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-236">
        <Path
          id="Path_67776"
          data-name="Path 67776"
          d="M132.467,116.558l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.525-.292.526.292Z"
          transform="translate(-132.467 -116.243)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-45"
        cx={0.139}
        cy={-1.044}
        r={5.81}
        gradientTransform="translate(-14.517) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-237">
        <Path
          id="Path_67777"
          data-name="Path 67777"
          d="M134.419,117.644l.565.315.566-.315-.566-.315Zm.565.292-.525-.292.525-.292.525.292Z"
          transform="translate(-134.419 -117.329)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-46"
        cx={-0.344}
        cy={-1.526}
        r={5.834}
        gradientTransform="translate(-14.732) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-238">
        <Path
          id="Path_67778"
          data-name="Path 67778"
          d="M136.371,118.73l.565.315.565-.315-.565-.315Zm.565.292-.525-.292.525-.293.525.293Z"
          transform="translate(-136.371 -118.415)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-47"
        cx={-0.826}
        cy={-2.008}
        r={5.849}
        gradientTransform="translate(-14.945) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-239">
        <Path
          id="Path_67779"
          data-name="Path 67779"
          d="M138.322,119.816l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-138.322 -119.501)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-48"
        cx={-1.308}
        cy={-2.49}
        r={5.857}
        gradientTransform="translate(-15.161) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-240">
        <Path
          id="Path_67780"
          data-name="Path 67780"
          d="M140.274,120.9l.566.315.565-.315-.565-.315Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-140.274 -120.587)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-49"
        cx={-1.79}
        cy={-2.973}
        r={5.862}
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-241">
        <Path
          id="Path_67781"
          data-name="Path 67781"
          d="M120.756,112.213l.565.315.565-.315-.565-.314Zm.565.293-.525-.293.525-.292.525.292Z"
          transform="translate(-120.756 -111.899)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-50"
        cx={3.033}
        cy={0.886}
        r={5.947}
        gradientTransform="translate(-13.241) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-242">
        <Path
          id="Path_67782"
          data-name="Path 67782"
          d="M122.707,113.3l.566.315.565-.315-.565-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-122.707 -112.985)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-51"
        cx={2.55}
        cy={0.403}
        r={5.942}
        gradientTransform="translate(-13.456) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-243">
        <Path
          id="Path_67783"
          data-name="Path 67783"
          d="M124.659,114.385l.566.315.566-.315-.566-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-124.659 -114.071)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-52"
        cx={2.068}
        cy={-0.079}
        r={5.909}
        gradientTransform="translate(-13.671) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-244">
        <Path
          id="Path_67784"
          data-name="Path 67784"
          d="M126.611,115.471l.566.315.565-.315-.565-.314Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-126.611 -115.157)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-53"
        cx={1.586}
        cy={-0.562}
        r={5.814}
        gradientTransform="translate(-13.884) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-245">
        <Path
          id="Path_67785"
          data-name="Path 67785"
          d="M128.563,116.558l.566.315.565-.315-.565-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-128.563 -116.243)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-54"
        cx={1.103}
        cy={-1.044}
        r={5.733}
        gradientTransform="translate(-14.09) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-246">
        <Path
          id="Path_67786"
          data-name="Path 67786"
          d="M130.515,117.644l.565.315.566-.315-.566-.315Zm.565.292-.525-.292.525-.292.526.292Z"
          transform="translate(-130.515 -117.329)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-55"
        cx={0.621}
        cy={-1.526}
        r={5.743}
        gradientTransform="translate(-14.304) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-247">
        <Path
          id="Path_67787"
          data-name="Path 67787"
          d="M132.467,118.73l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.292.525.292Z"
          transform="translate(-132.467 -118.415)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-56"
        cx={0.139}
        cy={-2.008}
        r={5.774}
        gradientTransform="translate(-14.518) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-248">
        <Path
          id="Path_67788"
          data-name="Path 67788"
          d="M134.419,119.816l.565.315.566-.315-.566-.315Zm.565.292-.525-.292.525-.292.525.292Z"
          transform="translate(-134.419 -119.501)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-57"
        cx={-0.344}
        cy={-2.49}
        r={5.799}
        gradientTransform="translate(-14.732) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-249">
        <Path
          id="Path_67789"
          data-name="Path 67789"
          d="M136.371,120.9l.565.315.565-.315-.565-.315Zm.565.293-.525-.293.525-.292.525.292Z"
          transform="translate(-136.371 -120.587)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-58"
        cx={-0.826}
        cy={-2.973}
        r={5.817}
        gradientTransform="translate(-14.945) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-250">
        <Path
          id="Path_67790"
          data-name="Path 67790"
          d="M120.755,114.385l.566.315.566-.315-.566-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-120.755 -114.071)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-59"
        cx={3.032}
        cy={-0.079}
        r={5.935}
        gradientTransform="translate(-13.243) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-251">
        <Path
          id="Path_67791"
          data-name="Path 67791"
          d="M122.707,115.471l.566.315.565-.315-.565-.314Zm.566.293-.525-.293.525-.292.525.292Z"
          transform="translate(-122.707 -115.157)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-60"
        cx={2.55}
        cy={-0.562}
        r={5.904}
        gradientTransform="translate(-13.456) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-252">
        <Path
          id="Path_67792"
          data-name="Path 67792"
          d="M124.659,116.558l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-124.659 -116.243)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-61"
        cx={2.068}
        cy={-1.044}
        r={5.84}
        gradientTransform="translate(-13.663) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-253">
        <Path
          id="Path_67793"
          data-name="Path 67793"
          d="M126.611,117.644l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.293.525.293Z"
          transform="translate(-126.611 -117.329)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-62"
        cx={1.586}
        cy={-1.526}
        r={5.768}
        gradientTransform="translate(-13.876) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-254">
        <Path
          id="Path_67794"
          data-name="Path 67794"
          d="M128.563,118.73l.566.315.565-.315-.565-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-128.563 -118.415)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-63"
        cx={1.103}
        cy={-2.008}
        r={5.731}
        gradientTransform="translate(-14.09) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-255">
        <Path
          id="Path_67795"
          data-name="Path 67795"
          d="M130.515,119.816l.565.315.566-.315-.566-.315Zm.565.292-.525-.292.525-.292.526.292Z"
          transform="translate(-130.515 -119.501)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-64"
        cx={0.621}
        cy={-2.49}
        r={5.736}
        gradientTransform="translate(-14.304) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-256">
        <Path
          id="Path_67796"
          data-name="Path 67796"
          d="M132.467,120.9l.566.315.565-.315-.565-.315Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-132.467 -120.587)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-65"
        cx={0.139}
        cy={-2.973}
        r={5.758}
        gradientTransform="translate(-14.518) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-257">
        <Path
          id="Path_67797"
          data-name="Path 67797"
          d="M120.755,116.558l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-120.755 -116.243)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-66"
        cx={3.032}
        cy={-1.044}
        r={5.9}
        gradientTransform="translate(-13.235) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-258">
        <Path
          id="Path_67798"
          data-name="Path 67798"
          d="M122.707,117.644l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.293.525.293Z"
          transform="translate(-122.707 -117.329)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-67"
        cx={2.55}
        cy={-1.526}
        r={5.855}
        gradientTransform="translate(-13.449) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-259">
        <Path
          id="Path_67799"
          data-name="Path 67799"
          d="M124.659,118.73l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-124.659 -118.415)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-68"
        cx={2.068}
        cy={-2.008}
        r={5.798}
        gradientTransform="translate(-13.663) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-260">
        <Path
          id="Path_67800"
          data-name="Path 67800"
          d="M126.611,119.816l.566.315.565-.315-.565-.315Zm.566.292-.526-.292.526-.292.525.292Z"
          transform="translate(-126.611 -119.501)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-69"
        cx={1.586}
        cy={-2.49}
        r={5.75}
        gradientTransform="translate(-13.876) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-261">
        <Path
          id="Path_67801"
          data-name="Path 67801"
          d="M128.563,120.9l.566.315.565-.315-.565-.315Zm.566.293-.526-.293.526-.292.525.292Z"
          transform="translate(-128.563 -120.587)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-70"
        cx={1.103}
        cy={-2.973}
        r={5.731}
        gradientTransform="translate(-14.09) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-262">
        <Path
          id="Path_67802"
          data-name="Path 67802"
          d="M120.755,118.73l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-120.755 -118.415)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-71"
        cx={3.032}
        cy={-2.008}
        r={5.863}
        gradientTransform="translate(-13.235) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-263">
        <Path
          id="Path_67803"
          data-name="Path 67803"
          d="M122.707,119.816l.566.315.566-.315-.566-.315Zm.566.292-.525-.292.525-.292.525.292Z"
          transform="translate(-122.707 -119.501)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-72"
        cx={2.55}
        cy={-2.49}
        r={5.818}
        gradientTransform="translate(-13.449) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-264">
        <Path
          id="Path_67804"
          data-name="Path 67804"
          d="M124.66,120.9l.565.315.565-.315-.565-.315Zm.565.293-.525-.293.525-.292.525.292Z"
          transform="translate(-124.66 -120.587)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-73"
        cx={2.068}
        cy={-2.973}
        r={5.774}
        gradientTransform="translate(-13.661) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-265">
        <Path
          id="Path_67805"
          data-name="Path 67805"
          d="M120.756,120.9l.565.315.566-.315-.566-.315Zm.565.293-.525-.293.525-.292.526.292Z"
          transform="translate(-120.756 -120.587)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-74"
        cx={3.033}
        cy={-2.973}
        r={5.832}
        gradientTransform="translate(-13.234) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-266">
        <Path
          id="Path_67806"
          data-name="Path 67806"
          d="M130.386,113.843a.075.075,0,1,0,.078.075.076.076,0,0,0-.078-.075"
          transform="translate(-130.309 -113.843)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-75"
        cx={4.9}
        cy={0.092}
        r={25.031}
        gradientTransform="translate(-8.457) scale(0.964 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-267">
        <Path
          id="Path_67807"
          data-name="Path 67807"
          d="M130.386,107.326a.075.075,0,1,0,.078.075.076.076,0,0,0-.078-.075"
          transform="translate(-130.309 -107.326)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-76"
        cx={4.9}
        cy={12.251}
        r={24.18}
        gradientTransform="translate(-8.037) scale(0.966 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-268">
        <Path
          id="Path_67808"
          data-name="Path 67808"
          d="M126.482,120.359a.075.075,0,1,0,.078.075.076.076,0,0,0-.078-.075"
          transform="translate(-126.405 -120.359)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-77"
        cx={11.934}
        cy={-12.064}
        r={24.474}
        gradientTransform="translate(-7.796) scale(0.966 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-269">
        <Path
          id="Path_67809"
          data-name="Path 67809"
          d="M138.194,122.532a.075.075,0,1,0,.078.075.076.076,0,0,0-.078-.075"
          transform="translate(-138.117 -122.532)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-78"
        cx={-9.168}
        cy={-16.148}
        r={24.367}
        gradientTransform="translate(-8.96) scale(0.964 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-270">
        <Path
          id="Path_67810"
          data-name="Path 67810"
          d="M140.146,117.1a.075.075,0,1,0,.078.075.076.076,0,0,0-.078-.075"
          transform="translate(-140.068 -117.101)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-79"
        cx={-12.661}
        cy={-5.986}
        r={24.824}
        gradientTransform="translate(-9.064) scale(0.964 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-271">
        <Path
          id="Path_67811"
          data-name="Path 67811"
          d="M136.242,119.273a.075.075,0,1,0,.078.075.076.076,0,0,0-.078-.075"
          transform="translate(-136.165 -119.273)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-80"
        cx={-5.651}
        cy={-10.038}
        r={24.331}
        gradientTransform="translate(-8.404) scale(0.966 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-272">
        <Path
          id="Path_67812"
          data-name="Path 67812"
          d="M124.531,110.585a.075.075,0,1,0,.077.075.076.076,0,0,0-.077-.075"
          transform="translate(-124.453 -110.585)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-81"
        cx={15.451}
        cy={6.182}
        r={24.907}
        gradientTransform="translate(-8.095) scale(0.964 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-273">
        <Path
          id="Path_67813"
          data-name="Path 67813"
          d="M123.666,112.178a.964.964,0,0,1-.641-.925,1.326,1.326,0,0,1,.833-.919,3.826,3.826,0,0,1,1.574-.357c1.3-.029,2.286.522,2.2,1.23a1.272,1.272,0,0,1-.751.878,3.74,3.74,0,0,1-1.668.4h-.086a3.269,3.269,0,0,1-1.461-.308m1.892-2.476a4.783,4.783,0,0,0-1.963.452,1.712,1.712,0,0,0-1.064,1.16c-.053.426.21.812.745,1.088a3.887,3.887,0,0,0,1.811.358,4.673,4.673,0,0,0,2.086-.508,1.618,1.618,0,0,0,.957-1.108c.1-.809-1-1.443-2.457-1.443h-.115"
          transform="translate(-122.525 -109.701)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-105"
        x1={-5.2}
        y1={7.319}
        x2={-5.157}
        y2={7.319}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#4293e0" />
        <Stop offset={0.51} stopColor="#a0c9ef" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="clip-path-275">
        <Rect
          id="Rectangle_8759"
          data-name="Rectangle 8759"
          width={5.4}
          height={3.607}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-276">
        <Path
          id="Path_67814"
          data-name="Path 67814"
          d="M118.083,97.628l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-118.083 -97.37)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-82"
        cx={-1.765}
        cy={2.957}
        r={5.912}
        gradientTransform="translate(-15.779) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-277">
        <Path
          id="Path_67815"
          data-name="Path 67815"
          d="M114.882,97.628l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-114.882 -97.37)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-83"
        cx={-0.801}
        cy={2.957}
        r={5.881}
        gradientTransform="translate(-15.351) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-278">
        <Path
          id="Path_67816"
          data-name="Path 67816"
          d="M116.483,98.519l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-116.483 -98.261)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-84"
        cx={-1.284}
        cy={2.476}
        r={5.919}
        gradientTransform="translate(-15.575) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-279">
        <Path
          id="Path_67817"
          data-name="Path 67817"
          d="M118.083,99.409l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-118.083 -99.151)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-85"
        cx={-1.765}
        cy={1.993}
        r={5.934}
        gradientTransform="translate(-15.779) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-280">
        <Path
          id="Path_67818"
          data-name="Path 67818"
          d="M111.682,97.628l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-111.682 -97.37)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-86"
        cx={0.163}
        cy={2.958}
        r={5.804}
        gradientTransform="translate(-14.933) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-281">
        <Path
          id="Path_67819"
          data-name="Path 67819"
          d="M113.282,98.518l.464.258.463-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-113.282 -98.26)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-87"
        cx={-0.319}
        cy={2.475}
        r={5.878}
        gradientTransform="translate(-15.136) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-282">
        <Path
          id="Path_67820"
          data-name="Path 67820"
          d="M114.882,99.409l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-114.882 -99.151)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-88"
        cx={-0.801}
        cy={1.993}
        r={5.922}
        gradientTransform="translate(-15.351) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-283">
        <Path
          id="Path_67821"
          data-name="Path 67821"
          d="M116.483,100.3l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-116.483 -100.042)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-89"
        cx={-1.284}
        cy={1.511}
        r={5.943}
        gradientTransform="translate(-15.575) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-284">
        <Path
          id="Path_67822"
          data-name="Path 67822"
          d="M118.083,101.19l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-118.083 -100.932)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-90"
        cx={-1.765}
        cy={1.029}
        r={5.947}
        gradientTransform="translate(-15.79) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-285">
        <Path
          id="Path_67823"
          data-name="Path 67823"
          d="M108.481,97.628l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-108.481 -97.37)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-91"
        cx={1.128}
        cy={2.958}
        r={5.733}
        gradientTransform="translate(-14.505) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-286">
        <Path
          id="Path_67824"
          data-name="Path 67824"
          d="M110.081,98.518l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-110.081 -98.26)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-92"
        cx={0.646}
        cy={2.475}
        r={5.758}
        gradientTransform="translate(-14.709) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-287">
        <Path
          id="Path_67825"
          data-name="Path 67825"
          d="M111.682,99.409l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-111.682 -99.151)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-93"
        cx={0.163}
        cy={1.993}
        r={5.87}
        gradientTransform="translate(-14.923) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-288">
        <Path
          id="Path_67826"
          data-name="Path 67826"
          d="M113.282,100.3l.464.258.463-.258-.463-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-113.282 -100.042)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-94"
        cx={-0.319}
        cy={1.511}
        r={5.934}
        gradientTransform="translate(-15.147) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-289">
        <Path
          id="Path_67827"
          data-name="Path 67827"
          d="M114.882,101.19l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-114.882 -100.932)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-95"
        cx={-0.801}
        cy={1.029}
        r={5.946}
        gradientTransform="translate(-15.362) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-290">
        <Path
          id="Path_67828"
          data-name="Path 67828"
          d="M116.483,102.081l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-116.483 -101.823)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-96"
        cx={-1.284}
        cy={0.546}
        r={5.944}
        gradientTransform="translate(-15.575) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-291">
        <Path
          id="Path_67829"
          data-name="Path 67829"
          d="M118.084,102.971l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-118.084 -102.713)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-97"
        cx={-1.766}
        cy={0.064}
        r={5.935}
        gradientTransform="translate(-15.778) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-292">
        <Path
          id="Path_67830"
          data-name="Path 67830"
          d="M105.281,97.628l.463.258.464-.258-.464-.258Zm.463.24-.431-.24.431-.24.431.24Z"
          transform="translate(-105.281 -97.37)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-98"
        cx={2.093}
        cy={2.958}
        r={5.834}
        gradientTransform="translate(-14.076) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-293">
        <Path
          id="Path_67831"
          data-name="Path 67831"
          d="M106.88,98.518l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-106.88 -98.26)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-99"
        cx={1.61}
        cy={2.475}
        r={5.801}
        gradientTransform="translate(-14.282) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-294">
        <Path
          id="Path_67832"
          data-name="Path 67832"
          d="M108.481,99.409l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-108.481 -99.151)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-100"
        cx={1.128}
        cy={1.993}
        r={5.739}
        gradientTransform="translate(-14.495) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-295">
        <Path
          id="Path_67833"
          data-name="Path 67833"
          d="M110.081,100.3l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-110.081 -100.042)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-101"
        cx={0.646}
        cy={1.511}
        r={5.849}
        gradientTransform="translate(-14.719) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-296">
        <Path
          id="Path_67834"
          data-name="Path 67834"
          d="M111.682,101.19l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-111.682 -100.932)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-102"
        cx={0.163}
        cy={1.029}
        r={5.946}
        gradientTransform="translate(-14.933) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-297">
        <Path
          id="Path_67835"
          data-name="Path 67835"
          d="M113.282,102.081l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-113.282 -101.823)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-103"
        cx={-0.319}
        cy={0.546}
        r={5.94}
        gradientTransform="translate(-15.148) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-298">
        <Path
          id="Path_67836"
          data-name="Path 67836"
          d="M114.882,102.971l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-114.882 -102.713)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-104"
        cx={-0.801}
        cy={0.064}
        r={5.927}
        gradientTransform="translate(-15.351) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-299">
        <Path
          id="Path_67837"
          data-name="Path 67837"
          d="M116.483,103.862l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-116.483 -103.604)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-105"
        cx={-1.284}
        cy={-0.419}
        r={5.923}
        gradientTransform="translate(-15.575) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-300">
        <Path
          id="Path_67838"
          data-name="Path 67838"
          d="M118.083,104.752l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-118.083 -104.494)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-106"
        cx={-1.765}
        cy={-0.9}
        r={5.916}
        gradientTransform="translate(-15.779) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-301">
        <Path
          id="Path_67839"
          data-name="Path 67839"
          d="M102.079,97.628l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-102.079 -97.37)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-107"
        cx={3.057}
        cy={2.958}
        r={5.896}
        gradientTransform="translate(-13.65) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-302">
        <Path
          id="Path_67840"
          data-name="Path 67840"
          d="M103.68,98.518l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-103.68 -98.26)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-108"
        cx={2.575}
        cy={2.475}
        r={5.894}
        gradientTransform="translate(-13.853) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-303">
        <Path
          id="Path_67841"
          data-name="Path 67841"
          d="M105.281,99.409l.463.258.464-.258-.464-.258Zm.463.24-.431-.24.431-.24.431.24Z"
          transform="translate(-105.281 -99.151)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-109"
        cx={2.093}
        cy={1.993}
        r={5.895}
        gradientTransform="translate(-14.066) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-304">
        <Path
          id="Path_67842"
          data-name="Path 67842"
          d="M106.88,100.3l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-106.88 -100.042)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-110"
        cx={1.61}
        cy={1.511}
        r={5.902}
        gradientTransform="translate(-14.292) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-305">
        <Path
          id="Path_67843"
          data-name="Path 67843"
          d="M108.481,101.19l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-108.481 -100.932)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-111"
        cx={1.128}
        cy={1.029}
        r={5.931}
        gradientTransform="translate(-14.505) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-306">
        <Path
          id="Path_67844"
          data-name="Path 67844"
          d="M110.081,102.081l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-110.081 -101.823)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-112"
        cx={0.646}
        cy={0.546}
        r={5.877}
        gradientTransform="translate(-14.719) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-307">
        <Path
          id="Path_67845"
          data-name="Path 67845"
          d="M111.682,102.971l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-111.682 -102.713)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-113"
        cx={0.163}
        cy={0.064}
        r={5.883}
        gradientTransform="translate(-14.923) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-308">
        <Path
          id="Path_67846"
          data-name="Path 67846"
          d="M113.282,103.862l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-113.282 -103.604)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-114"
        cx={-0.319}
        cy={-0.419}
        r={5.889}
        gradientTransform="translate(-15.148) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-309">
        <Path
          id="Path_67847"
          data-name="Path 67847"
          d="M114.883,104.752l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-114.883 -104.494)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-115"
        cx={-0.801}
        cy={-0.9}
        r={5.887}
        gradientTransform="translate(-15.35) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-310">
        <Path
          id="Path_67848"
          data-name="Path 67848"
          d="M116.483,105.643l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-116.483 -105.385)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-116"
        cx={-1.284}
        cy={-1.383}
        r={5.891}
        gradientTransform="translate(-15.575) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-311">
        <Path
          id="Path_67849"
          data-name="Path 67849"
          d="M118.083,106.533l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-118.083 -106.275)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-117"
        cx={-1.765}
        cy={-1.865}
        r={5.888}
        gradientTransform="translate(-15.779) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-312">
        <Path
          id="Path_67850"
          data-name="Path 67850"
          d="M102.079,99.409l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-102.079 -99.151)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-118"
        cx={3.057}
        cy={1.993}
        r={5.927}
        gradientTransform="translate(-13.64) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-313">
        <Path
          id="Path_67851"
          data-name="Path 67851"
          d="M103.68,100.3l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-103.68 -100.042)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-119"
        cx={2.575}
        cy={1.511}
        r={5.938}
        gradientTransform="translate(-13.863) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-314">
        <Path
          id="Path_67852"
          data-name="Path 67852"
          d="M105.281,101.19l.463.258.464-.258-.464-.258Zm.463.24-.431-.24.431-.24.431.24Z"
          transform="translate(-105.281 -100.932)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-120"
        cx={2.093}
        cy={1.029}
        r={5.946}
        gradientTransform="translate(-14.076) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-315">
        <Path
          id="Path_67853"
          data-name="Path 67853"
          d="M106.881,102.081l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-106.881 -101.823)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-121"
        cx={1.61}
        cy={0.546}
        r={5.918}
        gradientTransform="translate(-14.291) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-316">
        <Path
          id="Path_67854"
          data-name="Path 67854"
          d="M108.481,102.971l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-108.481 -102.713)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-122"
        cx={1.128}
        cy={0.064}
        r={5.742}
        gradientTransform="translate(-14.495) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-317">
        <Path
          id="Path_67855"
          data-name="Path 67855"
          d="M110.082,103.862l.464.258.463-.258-.463-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-110.082 -103.604)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-123"
        cx={0.646}
        cy={-0.419}
        r={5.766}
        gradientTransform="translate(-14.718) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-318">
        <Path
          id="Path_67856"
          data-name="Path 67856"
          d="M111.682,104.752l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-111.682 -104.494)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-124"
        cx={0.163}
        cy={-0.9}
        r={5.809}
        gradientTransform="translate(-14.923) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-319">
        <Path
          id="Path_67857"
          data-name="Path 67857"
          d="M113.282,105.643l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-113.282 -105.385)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-125"
        cx={-0.319}
        cy={-1.383}
        r={5.836}
        gradientTransform="translate(-15.148) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-320">
        <Path
          id="Path_67858"
          data-name="Path 67858"
          d="M114.883,106.533l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-114.883 -106.275)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-126"
        cx={-0.801}
        cy={-1.864}
        r={5.846}
        gradientTransform="translate(-15.35) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-321">
        <Path
          id="Path_67859"
          data-name="Path 67859"
          d="M116.483,107.424l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-116.483 -107.166)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-127"
        cx={-1.284}
        cy={-2.348}
        r={5.858}
        gradientTransform="translate(-15.575) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-322">
        <Path
          id="Path_67860"
          data-name="Path 67860"
          d="M118.083,108.314l.464.258.464-.258-.464-.258Zm.464.239-.431-.239.431-.24.431.24Z"
          transform="translate(-118.083 -108.056)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-128"
        cx={-1.765}
        cy={-2.829}
        r={5.861}
        gradientTransform="translate(-15.779) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-323">
        <Path
          id="Path_67861"
          data-name="Path 67861"
          d="M102.08,101.19l.463.258.464-.258-.464-.258Zm.463.24-.431-.24.431-.24.431.24Z"
          transform="translate(-102.08 -100.932)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-129"
        cx={3.058}
        cy={1.029}
        r={5.946}
        gradientTransform="translate(-13.648) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-324">
        <Path
          id="Path_67862"
          data-name="Path 67862"
          d="M103.68,102.081l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-103.68 -101.823)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-130"
        cx={2.575}
        cy={0.546}
        r={5.942}
        gradientTransform="translate(-13.863) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-325">
        <Path
          id="Path_67863"
          data-name="Path 67863"
          d="M105.281,102.971l.463.258.464-.258-.464-.258Zm.463.24-.431-.24.431-.24.431.24Z"
          transform="translate(-105.281 -102.713)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-131"
        cx={2.093}
        cy={0.064}
        r={5.904}
        gradientTransform="translate(-14.066) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-326">
        <Path
          id="Path_67864"
          data-name="Path 67864"
          d="M106.881,103.862l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-106.881 -103.604)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-132"
        cx={1.61}
        cy={-0.419}
        r={5.813}
        gradientTransform="translate(-14.291) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-327">
        <Path
          id="Path_67865"
          data-name="Path 67865"
          d="M108.481,104.752l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-108.481 -104.494)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-133"
        cx={1.128}
        cy={-0.9}
        r={5.731}
        gradientTransform="translate(-14.495) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-328">
        <Path
          id="Path_67866"
          data-name="Path 67866"
          d="M110.082,105.643l.464.258.463-.258-.463-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-110.082 -105.385)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-134"
        cx={0.646}
        cy={-1.383}
        r={5.744}
        gradientTransform="translate(-14.718) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-329">
        <Path
          id="Path_67867"
          data-name="Path 67867"
          d="M111.682,106.533l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-111.682 -106.275)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-135"
        cx={0.163}
        cy={-1.864}
        r={5.773}
        gradientTransform="translate(-14.923) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-330">
        <Path
          id="Path_67868"
          data-name="Path 67868"
          d="M113.282,107.424l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-113.282 -107.166)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-136"
        cx={-0.319}
        cy={-2.348}
        r={5.802}
        gradientTransform="translate(-15.148) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-331">
        <Path
          id="Path_67869"
          data-name="Path 67869"
          d="M114.883,108.314l.464.258.464-.258-.464-.258Zm.464.239-.431-.239.431-.24.431.24Z"
          transform="translate(-114.883 -108.056)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-137"
        cx={-0.801}
        cy={-2.829}
        r={5.815}
        gradientTransform="translate(-15.35) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-332">
        <Path
          id="Path_67870"
          data-name="Path 67870"
          d="M102.08,102.971l.463.258.464-.258-.464-.258Zm.463.24-.431-.24.431-.24.431.24Z"
          transform="translate(-102.08 -102.713)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-138"
        cx={3.058}
        cy={0.064}
        r={5.933}
        gradientTransform="translate(-13.648) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-333">
        <Path
          id="Path_67871"
          data-name="Path 67871"
          d="M103.68,103.862l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-103.68 -103.604)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-139"
        cx={2.575}
        cy={-0.419}
        r={5.904}
        gradientTransform="translate(-13.863) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-334">
        <Path
          id="Path_67872"
          data-name="Path 67872"
          d="M105.28,104.752l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-105.28 -104.494)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-140"
        cx={2.092}
        cy={-0.9}
        r={5.839}
        gradientTransform="translate(-14.068) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-335">
        <Path
          id="Path_67873"
          data-name="Path 67873"
          d="M106.881,105.643l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-106.881 -105.385)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-141"
        cx={1.61}
        cy={-1.383}
        r={5.769}
        gradientTransform="translate(-14.291) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-336">
        <Path
          id="Path_67874"
          data-name="Path 67874"
          d="M108.481,106.533l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-108.481 -106.275)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-142"
        cx={1.128}
        cy={-1.865}
        r={5.73}
        gradientTransform="translate(-14.495) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-337">
        <Path
          id="Path_67875"
          data-name="Path 67875"
          d="M110.082,107.424l.464.258.463-.258-.463-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-110.082 -107.166)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-143"
        cx={0.646}
        cy={-2.348}
        r={5.737}
        gradientTransform="translate(-14.718) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-338">
        <Path
          id="Path_67876"
          data-name="Path 67876"
          d="M111.682,108.314l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-111.682 -108.056)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-144"
        cx={0.163}
        cy={-2.829}
        r={5.755}
        gradientTransform="translate(-14.923) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-339">
        <Path
          id="Path_67877"
          data-name="Path 67877"
          d="M102.08,104.752l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-102.08 -104.494)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-145"
        cx={3.057}
        cy={-0.9}
        r={5.898}
        gradientTransform="translate(-13.64) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-340">
        <Path
          id="Path_67878"
          data-name="Path 67878"
          d="M103.68,105.643l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-103.68 -105.385)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-146"
        cx={2.575}
        cy={-1.383}
        r={5.857}
        gradientTransform="translate(-13.863) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-341">
        <Path
          id="Path_67879"
          data-name="Path 67879"
          d="M105.28,106.533l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-105.28 -106.275)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-147"
        cx={2.092}
        cy={-1.864}
        r={5.796}
        gradientTransform="translate(-14.068) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-342">
        <Path
          id="Path_67880"
          data-name="Path 67880"
          d="M106.881,107.424l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-106.881 -107.166)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-148"
        cx={1.61}
        cy={-2.348}
        r={5.751}
        gradientTransform="translate(-14.291) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-343">
        <Path
          id="Path_67881"
          data-name="Path 67881"
          d="M108.481,108.314l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-108.481 -108.056)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-149"
        cx={1.128}
        cy={-2.829}
        r={5.729}
        gradientTransform="translate(-14.495) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-344">
        <Path
          id="Path_67882"
          data-name="Path 67882"
          d="M102.08,106.533l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-102.08 -106.275)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-150"
        cx={3.057}
        cy={-1.865}
        r={5.862}
        gradientTransform="translate(-13.64) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-345">
        <Path
          id="Path_67883"
          data-name="Path 67883"
          d="M103.68,107.424l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-103.68 -107.166)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-151"
        cx={2.575}
        cy={-2.348}
        r={5.819}
        gradientTransform="translate(-13.863) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-346">
        <Path
          id="Path_67884"
          data-name="Path 67884"
          d="M105.28,108.314l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-105.28 -108.056)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-152"
        cx={2.092}
        cy={-2.829}
        r={5.772}
        gradientTransform="translate(-14.068) scale(0.556 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-347">
        <Path
          id="Path_67885"
          data-name="Path 67885"
          d="M102.08,108.314l.464.258.464-.258-.464-.258Zm.464.24-.431-.24.431-.24.431.24Z"
          transform="translate(-102.08 -108.056)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-153"
        cx={3.057}
        cy={-2.829}
        r={5.83}
        gradientTransform="translate(-13.639) scale(0.557 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-348">
        <Path
          id="Path_67886"
          data-name="Path 67886"
          d="M109.976,102.526a.061.061,0,1,0,.064.061.063.063,0,0,0-.064-.061"
          transform="translate(-109.912 -102.526)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-154"
        cx={5.071}
        cy={0.695}
        r={25.005}
        gradientTransform="translate(-8.993) scale(0.963 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-349">
        <Path
          id="Path_67887"
          data-name="Path 67887"
          d="M109.976,97.183a.061.061,0,1,0,.064.061.063.063,0,0,0-.064-.061"
          transform="translate(-109.912 -97.183)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-155"
        cx={5.071}
        cy={12.866}
        r={24.207}
        gradientTransform="translate(-8.985) scale(0.963 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-350">
        <Path
          id="Path_67888"
          data-name="Path 67888"
          d="M106.775,107.87a.061.061,0,1,0,.064.061.062.062,0,0,0-.064-.061"
          transform="translate(-106.712 -107.87)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-156"
        cx={12.115}
        cy={-11.478}
        r={24.509}
        gradientTransform="translate(-8.251) scale(0.965 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-351">
        <Path
          id="Path_67889"
          data-name="Path 67889"
          d="M116.378,109.651a.061.061,0,1,0,.063.061.062.062,0,0,0-.063-.061"
          transform="translate(-116.314 -109.651)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-157"
        cx={-8.989}
        cy={-15.569}
        r={24.395}
        gradientTransform="translate(-9.538) scale(0.963 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-352">
        <Path
          id="Path_67890"
          data-name="Path 67890"
          d="M117.978,105.2a.061.061,0,1,0,.064.061.062.062,0,0,0-.064-.061"
          transform="translate(-117.915 -105.198)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-158"
        cx={-12.508}
        cy={-5.391}
        r={24.853}
        gradientTransform="translate(-9.117) scale(0.965 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-353">
        <Path
          id="Path_67891"
          data-name="Path 67891"
          d="M114.778,106.979a.061.061,0,1,0,.063.061.062.062,0,0,0-.063-.061"
          transform="translate(-114.714 -106.979)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-159"
        cx={-5.472}
        cy={-9.448}
        r={24.345}
        gradientTransform="translate(-8.873) scale(0.965 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-354">
        <Path
          id="Path_67892"
          data-name="Path 67892"
          d="M105.175,99.855a.061.061,0,1,0,.063.061.062.062,0,0,0-.063-.061"
          transform="translate(-105.111 -99.855)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="radial-gradient-160"
        cx={15.633}
        cy={6.78}
        r={24.883}
        gradientTransform="translate(-8.115) scale(0.965 1)"
        xlinkHref="#radial-gradient-3"
      />
      <ClipPath id="clip-path-355">
        <Path
          id="Path_67893"
          data-name="Path 67893"
          d="M103.2,100.633a.964.964,0,0,1-.641-.925,1.326,1.326,0,0,1,.833-.919,3.831,3.831,0,0,1,1.574-.357c1.3-.029,2.286.523,2.2,1.231a1.273,1.273,0,0,1-.751.879,3.746,3.746,0,0,1-1.668.4h-.086a3.266,3.266,0,0,1-1.461-.308m1.892-2.476a4.788,4.788,0,0,0-1.963.452,1.711,1.711,0,0,0-1.063,1.16c-.054.426.21.812.744,1.088a3.891,3.891,0,0,0,1.811.358,4.682,4.682,0,0,0,2.085-.508,1.618,1.618,0,0,0,.957-1.108c.1-.809-1-1.443-2.457-1.443h-.115"
          transform="translate(-102.055 -98.156)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-106"
        x1={-4.32}
        y1={7.946}
        x2={-4.278}
        y2={7.946}
        xlinkHref="#linear-gradient-105"
      />
      <ClipPath id="clip-path-357">
        <Path
          id="Path_67894"
          data-name="Path 67894"
          d="M183.663,66.74l-.179.1a.013.013,0,0,0,0,.022l1.765,1.011a.028.028,0,0,0,.012,0,.045.045,0,0,0,.021-.005l.179-.1a.013.013,0,0,0,0-.022L183.7,66.737a.032.032,0,0,0-.012,0,.045.045,0,0,0-.021.005"
          transform="translate(-183.478 -66.735)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-107"
        x1={-25.714}
        y1={42.511}
        x2={-25.574}
        y2={42.511}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-358">
        <Path
          id="Path_67895"
          data-name="Path 67895"
          d="M185.185,69.514l.938.535a.028.028,0,0,0,.012,0,.045.045,0,0,0,.021-.005l.179-.1a.013.013,0,0,0,0-.022l-.925-.528Z"
          transform="translate(-185.185 -69.393)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-108"
        x1={-44.688}
        y1={72.743}
        x2={-44.446}
        y2={72.743}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-359">
        <Path
          id="Path_67896"
          data-name="Path 67896"
          d="M182.389,67.66l-.179.1a.013.013,0,0,0,0,.022l.641.371.226-.121-.656-.379a.028.028,0,0,0-.012,0,.043.043,0,0,0-.021.005"
          transform="translate(-182.204 -67.655)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-109"
        x1={-58.154}
        y1={96.501}
        x2={-57.835}
        y2={96.501}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-360">
        <Path
          id="Path_67897"
          data-name="Path 67897"
          d="M181.113,68.58l-.179.1a.013.013,0,0,0,0,.022l1.765,1.011a.028.028,0,0,0,.012,0,.047.047,0,0,0,.021-.005l.179-.1a.013.013,0,0,0,0-.022l-1.765-1.012a.032.032,0,0,0-.012,0,.045.045,0,0,0-.021,0"
          transform="translate(-180.928 -68.575)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-110"
        x1={-25.36}
        y1={42.062}
        x2={-25.22}
        y2={42.062}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-361">
        <Path
          id="Path_67898"
          data-name="Path 67898"
          d="M234.122,93.223l-.179.1a.013.013,0,0,0,0,.022l1.765,1.011a.027.027,0,0,0,.012,0,.045.045,0,0,0,.021-.005l.179-.1a.013.013,0,0,0,0-.022l-1.765-1.011a.028.028,0,0,0-.012,0,.048.048,0,0,0-.021.005"
          transform="translate(-233.937 -93.218)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-111"
        x1={-32.791}
        y1={36.043}
        x2={-32.651}
        y2={36.043}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-362">
        <Path
          id="Path_67899"
          data-name="Path 67899"
          d="M235.643,96l.938.535a.024.024,0,0,0,.012,0,.044.044,0,0,0,.021-.005l.179-.1a.013.013,0,0,0,0-.022l-.925-.528Z"
          transform="translate(-235.643 -95.876)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-112"
        x1={-56.85}
        y1={61.503}
        x2={-56.609}
        y2={61.503}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-363">
        <Path
          id="Path_67900"
          data-name="Path 67900"
          d="M232.847,94.143l-.179.1a.013.013,0,0,0,0,.022l.641.371.226-.12-.655-.379a.038.038,0,0,0-.012,0,.045.045,0,0,0-.021.005"
          transform="translate(-232.662 -94.138)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-113"
        x1={-74.259}
        y1={81.738}
        x2={-73.94}
        y2={81.738}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-364">
        <Path
          id="Path_67901"
          data-name="Path 67901"
          d="M231.571,95.063l-.179.1a.013.013,0,0,0,0,.022l1.765,1.011a.024.024,0,0,0,.012,0,.045.045,0,0,0,.021-.005l.179-.1a.013.013,0,0,0,0-.022L231.6,95.06a.032.032,0,0,0-.012,0,.041.041,0,0,0-.021.005"
          transform="translate(-231.386 -95.058)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-114"
        x1={-32.429}
        y1={35.593}
        x2={-32.289}
        y2={35.593}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-365">
        <Path
          id="Path_67902"
          data-name="Path 67902"
          d="M220.8,118.289l.377.2.337-.193-.378-.2Z"
          transform="translate(-220.803 -118.097)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-115"
        x1={-82.327}
        y1={42.747}
        x2={-81.954}
        y2={42.747}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-366">
        <Path
          id="Path_67903"
          data-name="Path 67903"
          d="M216.147,115.648l1.172.669.336-.193-1.172-.669Z"
          transform="translate(-216.147 -115.455)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-116"
        x1={-37.651}
        y1={20.611}
        x2={-37.476}
        y2={20.611}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-367">
        <Path
          id="Path_67904"
          data-name="Path 67904"
          d="M222.809,119.369l1.62.873.338-.192-1.622-.873Z"
          transform="translate(-222.809 -119.177)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-117"
        x1={-30.509}
        y1={15.696}
        x2={-30.372}
        y2={15.696}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-368">
        <Path
          id="Path_67905"
          data-name="Path 67905"
          d="M217.629,121.349l2.326,1.257.338-.192-2.329-1.257Z"
          transform="translate(-217.629 -121.157)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-118"
        x1={-21.908}
        y1={11.425}
        x2={-21.807}
        y2={11.425}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-369">
        <Path
          id="Path_67906"
          data-name="Path 67906"
          d="M226.392,126.075l1.084.639.339-.191-1.084-.639Z"
          transform="translate(-226.392 -125.883)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-119"
        x1={-41.401}
        y1={19.896}
        x2={-41.218}
        y2={19.896}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-370">
        <Path
          id="Path_67907"
          data-name="Path 67907"
          d="M230.7,128.549l.9.485.338-.191-.9-.485Z"
          transform="translate(-230.699 -128.357)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-120"
        x1={-49.93}
        y1={22.827}
        x2={-49.714}
        y2={22.827}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-371">
        <Path
          id="Path_67908"
          data-name="Path 67908"
          d="M211.865,118.105l1.412.8.335-.192-1.413-.8Z"
          transform="translate(-211.865 -117.913)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-121"
        x1={-31.944}
        y1={17.516}
        x2={-31.793}
        y2={17.516}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-372">
        <Path
          id="Path_67909"
          data-name="Path 67909"
          d="M213.987,116.887l2.391,1.327.336-.192-2.393-1.327Z"
          transform="translate(-213.987 -116.695)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-122"
        x1={-20.823}
        y1={11.486}
        x2={-20.726}
        y2={11.486}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-373">
        <Path
          id="Path_67910"
          data-name="Path 67910"
          d="M223.52,122.162l2.844,1.573.338-.192-2.845-1.573Z"
          transform="translate(-223.52 -121.97)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-123"
        x1={-18.671}
        y1={9.484}
        x2={-18.588}
        y2={9.484}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-374">
        <Path
          id="Path_67911"
          data-name="Path 67911"
          d="M195.721,91.732l.377.2.336-.193-.377-.2Z"
          transform="translate(-195.721 -91.54)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-124"
        x1={-72.989}
        y1={51.96}
        x2={-72.616}
        y2={51.96}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-375">
        <Path
          id="Path_67912"
          data-name="Path 67912"
          d="M191.065,89.09l1.172.669.336-.193L191.4,88.9Z"
          transform="translate(-191.065 -88.897)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-125"
        x1={-33.27}
        y1={24.92}
        x2={-33.096}
        y2={24.92}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-376">
        <Path
          id="Path_67913"
          data-name="Path 67913"
          d="M197.726,92.812l1.621.873.338-.192-1.622-.873Z"
          transform="translate(-197.726 -92.62)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-126"
        x1={-27.07}
        y1={19.066}
        x2={-26.933}
        y2={19.066}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-377">
        <Path
          id="Path_67914"
          data-name="Path 67914"
          d="M192.547,94.792l2.326,1.257.338-.191L192.882,94.6Z"
          transform="translate(-192.547 -94.6)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-127"
        x1={-19.381}
        y1={13.905}
        x2={-19.28}
        y2={13.905}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-378">
        <Path
          id="Path_67915"
          data-name="Path 67915"
          d="M201.311,99.518l1.083.639.339-.191-1.084-.639Z"
          transform="translate(-201.311 -99.327)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-128"
        x1={-36.826}
        y1={24.447}
        x2={-36.643}
        y2={24.447}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-379">
        <Path
          id="Path_67916"
          data-name="Path 67916"
          d="M205.618,101.992l.9.485.338-.191-.9-.485Z"
          transform="translate(-205.618 -101.8)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-129"
        x1={-44.498}
        y1={28.16}
        x2={-44.281}
        y2={28.16}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-380">
        <Path
          id="Path_67917"
          data-name="Path 67917"
          d="M186.783,91.548l1.412.8.335-.192-1.413-.8Z"
          transform="translate(-186.783 -91.356)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-130"
        x1={-28.158}
        y1={21.248}
        x2={-28.008}
        y2={21.248}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-381">
        <Path
          id="Path_67918"
          data-name="Path 67918"
          d="M188.906,90.33l2.391,1.327.336-.192-2.393-1.327Z"
          transform="translate(-188.906 -90.138)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-131"
        x1={-18.381}
        y1={13.891}
        x2={-18.283}
        y2={13.891}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-382">
        <Path
          id="Path_67919"
          data-name="Path 67919"
          d="M198.438,95.6l2.844,1.573.338-.192-2.845-1.573Z"
          transform="translate(-198.438 -95.413)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-132"
        x1={-16.573}
        y1={11.546}
        x2={-16.489}
        y2={11.546}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-383">
        <Path
          id="Path_67920"
          data-name="Path 67920"
          d="M107.465,119.443l.427.231.339-.191-.427-.231Z"
          transform="translate(-107.465 -119.252)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-133"
        x1={-34.417}
        y1={43.958}
        x2={-34.097}
        y2={43.958}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-384">
        <Path
          id="Path_67921"
          data-name="Path 67921"
          d="M99.307,114.889l1.083.639.339-.191-1.084-.639Z"
          transform="translate(-99.307 -114.698)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-134"
        x1={-16.815}
        y1={24.005}
        x2={-16.645}
        y2={24.005}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-385">
        <Path
          id="Path_67922"
          data-name="Path 67922"
          d="M103.613,117.363l.9.485.338-.191-.9-.485Z"
          transform="translate(-103.613 -117.172)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-135"
        x1={-20.57}
        y1={27.869}
        x2={-20.371}
        y2={27.869}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-386">
        <Path
          id="Path_67923"
          data-name="Path 67923"
          d="M106.726,116.918l2.326,1.257.337-.191-2.329-1.257Z"
          transform="translate(-106.726 -116.726)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-136"
        x1={-9.821}
        y1={13.142}
        x2={-9.729}
        y2={13.142}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-387">
        <Path
          id="Path_67924"
          data-name="Path 67924"
          d="M109.6,120.614l1.016.554.339-.191-1.017-.554Z"
          transform="translate(-109.597 -120.423)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-137"
        x1={-19.818}
        y1={24.724}
        x2={-19.637}
        y2={24.724}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-388">
        <Path
          id="Path_67925"
          data-name="Path 67925"
          d="M100.961,113.675l1.412.8.335-.192-1.413-.8Z"
          transform="translate(-100.961 -113.483)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-138"
        x1={-14.021}
        y1={20.038}
        x2={-13.882}
        y2={20.038}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-389">
        <Path
          id="Path_67926"
          data-name="Path 67926"
          d="M97.449,116.286l2.844,1.573.338-.192-2.845-1.573Z"
          transform="translate(-97.449 -116.094)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-139"
        x1={-7.449}
        y1={10.992}
        x2={-7.372}
        y2={10.992}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-390">
        <Path
          id="Path_67927"
          data-name="Path 67927"
          d="M154.087,122.984l.427.231.339-.191-.427-.231Z"
          transform="translate(-154.087 -122.793)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-140"
        x1={-49.362}
        y1={42.676}
        x2={-49.041}
        y2={42.676}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-391">
        <Path
          id="Path_67928"
          data-name="Path 67928"
          d="M145.929,118.43l1.084.639.339-.191-1.084-.639Z"
          transform="translate(-145.929 -118.238)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-141"
        x1={-24.739}
        y1={23.334}
        x2={-24.569}
        y2={23.334}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-392">
        <Path
          id="Path_67929"
          data-name="Path 67929"
          d="M150.235,120.9l.9.485.339-.191-.9-.485Z"
          transform="translate(-150.235 -120.712)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-142"
        x1={-29.853}
        y1={27.078}
        x2={-29.654}
        y2={27.078}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-393">
        <Path
          id="Path_67930"
          data-name="Path 67930"
          d="M153.348,120.46l2.326,1.257.337-.192-2.328-1.257Z"
          transform="translate(-153.348 -120.268)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-143"
        x1={-14.137}
        y1={12.774}
        x2={-14.045}
        y2={12.774}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-394">
        <Path
          id="Path_67931"
          data-name="Path 67931"
          d="M156.218,124.154l1.017.554.339-.191-1.017-.554Z"
          transform="translate(-156.218 -123.963)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-144"
        x1={-28.267}
        y1={23.997}
        x2={-28.086}
        y2={23.997}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-395">
        <Path
          id="Path_67932"
          data-name="Path 67932"
          d="M147.584,117.216l1.412.8.335-.192-1.413-.8Z"
          transform="translate(-147.584 -117.024)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-145"
        x1={-20.527}
        y1={19.489}
        x2={-20.388}
        y2={19.489}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-396">
        <Path
          id="Path_67933"
          data-name="Path 67933"
          d="M144.072,119.827l2.843,1.573.339-.192-2.845-1.574Z"
          transform="translate(-144.072 -119.635)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-146"
        x1={-11.042}
        y1={10.686}
        x2={-10.965}
        y2={10.686}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-397">
        <Path
          id="Path_67934"
          data-name="Path 67934"
          d="M162.521,73.23l.376.2.335-.192-.376-.2Z"
          transform="translate(-162.521 -73.038)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-147"
        x1={-57.894}
        y1={85.138}
        x2={-57.538}
        y2={85.138}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-398">
        <Path
          id="Path_67935"
          data-name="Path 67935"
          d="M157.884,70.6l1.167.666.335-.192-1.168-.666Z"
          transform="translate(-157.884 -70.407)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-148"
        x1={-26.494}
        y1={40.168}
        x2={-26.326}
        y2={40.168}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-399">
        <Path
          id="Path_67936"
          data-name="Path 67936"
          d="M164.518,74.306l1.614.869.337-.191-1.615-.869Z"
          transform="translate(-164.518 -74.114)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-149"
        x1={-21.374}
        y1={31.343}
        x2={-21.244}
        y2={31.343}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-400">
        <Path
          id="Path_67937"
          data-name="Path 67937"
          d="M171.334,77.978l2.2,1.227.339-.192-2.2-1.227Z"
          transform="translate(-171.334 -77.786)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-150"
        x1={-17.024}
        y1={23.145}
        x2={-16.924}
        y2={23.145}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-401">
        <Path
          id="Path_67938"
          data-name="Path 67938"
          d="M179.99,82.784l.578.311.339-.191-.578-.311Z"
          transform="translate(-179.99 -82.593)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-151"
        x1={-49.759}
        y1={62.78}
        x2={-49.482}
        y2={62.78}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-402">
        <Path
          id="Path_67939"
          data-name="Path 67939"
          d="M159.359,76.278l2.317,1.251.336-.191-2.319-1.251Z"
          transform="translate(-159.359 -76.087)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-152"
        x1={-15.211}
        y1={22.82}
        x2={-15.115}
        y2={22.82}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-403">
        <Path
          id="Path_67940"
          data-name="Path 67940"
          d="M176.213,85.52l.425.23.338-.191-.425-.23Z"
          transform="translate(-176.213 -85.329)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-153"
        x1={-58.541}
        y1={73.888}
        x2={-58.209}
        y2={73.888}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-404">
        <Path
          id="Path_67941"
          data-name="Path 67941"
          d="M168.087,80.987l1.08.635.337-.191-1.08-.635Z"
          transform="translate(-168.087 -80.796)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-154"
        x1={-29.808}
        y1={39.352}
        x2={-29.63}
        y2={39.352}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-405">
        <Path
          id="Path_67942"
          data-name="Path 67942"
          d="M172.376,83.45l.895.482.337-.191-.9-.482Z"
          transform="translate(-172.376 -83.259)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-155"
        x1={-35.466}
        y1={46.623}
        x2={-35.26}
        y2={46.623}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-406">
        <Path
          id="Path_67943"
          data-name="Path 67943"
          d="M153,82.815l.425.229.338-.191-.426-.229Z"
          transform="translate(-153.004 -82.624)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-156"
        x1={-50.828}
        y1={75.206}
        x2={-50.496}
        y2={75.206}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-407">
        <Path
          id="Path_67944"
          data-name="Path 67944"
          d="M144.878,78.279l1.079.637.338-.191-1.08-.636Z"
          transform="translate(-144.878 -78.088)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-157"
        x1={-25.697}
        y1={40.038}
        x2={-25.519}
        y2={40.038}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-408">
        <Path
          id="Path_67945"
          data-name="Path 67945"
          d="M149.168,80.742l.894.483.337-.191-.9-.483Z"
          transform="translate(-149.168 -80.551)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-158"
        x1={-30.706}
        y1={47.474}
        x2={-30.5}
        y2={47.474}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-409">
        <Path
          id="Path_67946"
          data-name="Path 67946"
          d="M153.619,73.047l1.407.8.334-.191-1.407-.8Z"
          transform="translate(-153.619 -72.856)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-159"
        x1={-22.26}
        y1={34.367}
        x2={-22.114}
        y2={34.367}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-410">
        <Path
          id="Path_67947"
          data-name="Path 67947"
          d="M152.267,80.3l2.317,1.251.336-.191L152.6,80.108Z"
          transform="translate(-152.267 -80.108)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-160"
        x1={-14.533}
        y1={22.264}
        x2={-14.437}
        y2={22.264}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-411">
        <Path
          id="Path_67948"
          data-name="Path 67948"
          d="M161,85.006l1.079.637.338-.191-1.079-.637Z"
          transform="translate(-160.995 -84.815)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-161"
        x1={-28.566}
        y1={38.391}
        x2={-28.389}
        y2={38.391}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-412">
        <Path
          id="Path_67949"
          data-name="Path 67949"
          d="M146.527,77.069l1.406.8.334-.191-1.407-.8Z"
          transform="translate(-146.527 -76.878)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-162"
        x1={-21.233}
        y1={33.548}
        x2={-21.087}
        y2={33.548}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-413">
        <Path
          id="Path_67950"
          data-name="Path 67950"
          d="M155.732,71.834l2.382,1.321.335-.191-2.383-1.321Z"
          transform="translate(-155.732 -71.643)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-163"
        x1={-14.472}
        y1={22.512}
        x2={-14.378}
        y2={22.512}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-414">
        <Path
          id="Path_67951"
          data-name="Path 67951"
          d="M165.227,77.087l2.832,1.567.337-.191L165.562,76.9Z"
          transform="translate(-165.227 -76.896)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-164"
        x1={-13.164}
        y1={18.767}
        x2={-13.084}
        y2={18.767}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-415">
        <Path
          id="Path_67952"
          data-name="Path 67952"
          d="M143.029,79.669l2.832,1.567.337-.191-2.834-1.567Z"
          transform="translate(-143.029 -79.478)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-165"
        x1={-11.389}
        y1={18.474}
        x2={-11.309}
        y2={18.474}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-416">
        <Path
          id="Path_67953"
          data-name="Path 67953"
          d="M158.216,77.911l1.606.869.335-.191-1.607-.869Z"
          transform="translate(-158.216 -77.72)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-166"
        x1={-20.651}
        y1={30.749}
        x2={-20.52}
        y2={30.749}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-417">
        <Path
          id="Path_67954"
          data-name="Path 67954"
          d="M165,81.58l1.729.973.336-.19-1.73-.973Z"
          transform="translate(-164.999 -81.39)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-167"
        x1={-20.163}
        y1={27.643}
        x2={-20.04}
        y2={27.643}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-418">
        <Path
          id="Path_67955"
          data-name="Path 67955"
          d="M151.6,74.206l1.667.937.333-.191-1.668-.937Z"
          transform="translate(-151.601 -74.015)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-168"
        x1={-19.119}
        y1={29.828}
        x2={-18.993}
        y2={29.828}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-419">
        <Path
          id="Path_67956"
          data-name="Path 67956"
          d="M153.817,139.206l.376.2.335-.191-.376-.2Z"
          transform="translate(-153.817 -139.014)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-169"
        x1={-54.8}
        y1={51.758}
        x2={-54.444}
        y2={51.758}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-420">
        <Path
          id="Path_67957"
          data-name="Path 67957"
          d="M149.18,136.574l1.167.666.335-.192-1.168-.666Z"
          transform="translate(-149.18 -136.382)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-170"
        x1={-25.03}
        y1={24.667}
        x2={-24.862}
        y2={24.667}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-421">
        <Path
          id="Path_67958"
          data-name="Path 67958"
          d="M155.814,140.281l1.614.869.337-.191-1.615-.87Z"
          transform="translate(-155.814 -140.089)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-171"
        x1={-20.24}
        y1={18.989}
        x2={-20.11}
        y2={18.989}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-422">
        <Path
          id="Path_67959"
          data-name="Path 67959"
          d="M162.63,143.952l2.2,1.227.339-.192-2.2-1.227Z"
          transform="translate(-162.63 -143.761)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-172"
        x1={-16.156}
        y1={13.832}
        x2={-16.056}
        y2={13.832}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-423">
        <Path
          id="Path_67960"
          data-name="Path 67960"
          d="M171.286,148.759l.578.311.339-.191-.579-.311Z"
          transform="translate(-171.286 -148.568)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-173"
        x1={-47.338}
        y1={36.654}
        x2={-47.061}
        y2={36.654}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-424">
        <Path
          id="Path_67961"
          data-name="Path 67961"
          d="M150.656,142.253l2.317,1.251.336-.191-2.319-1.251Z"
          transform="translate(-150.656 -142.062)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-174"
        x1={-14.379}
        y1={13.737}
        x2={-14.283}
        y2={13.737}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-425">
        <Path
          id="Path_67962"
          data-name="Path 67962"
          d="M167.509,151.495l.425.229.338-.191-.425-.23Z"
          transform="translate(-167.509 -151.304)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-175"
        x1={-55.647}
        y1={42.589}
        x2={-55.314}
        y2={42.589}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-426">
        <Path
          id="Path_67963"
          data-name="Path 67963"
          d="M159.384,146.96l1.079.637.337-.191-1.079-.637Z"
          transform="translate(-159.384 -146.769)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-176"
        x1={-28.285}
        y1={23.196}
        x2={-28.107}
        y2={23.196}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-427">
        <Path
          id="Path_67964"
          data-name="Path 67964"
          d="M163.673,149.423l.894.483.337-.191-.9-.483Z"
          transform="translate(-163.673 -149.232)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-177"
        x1={-33.688}
        y1={27.176}
        x2={-33.482}
        y2={27.176}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-428">
        <Path
          id="Path_67965"
          data-name="Path 67965"
          d="M144.915,139.022l1.407.8.333-.191-1.407-.8Z"
          transform="translate(-144.915 -138.831)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-178"
        x1={-20.998}
        y1={20.916}
        x2={-20.853}
        y2={20.916}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-429">
        <Path
          id="Path_67966"
          data-name="Path 67966"
          d="M147.029,137.809l2.381,1.321.335-.191-2.383-1.321Z"
          transform="translate(-147.029 -137.618)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-179"
        x1={-13.661}
        y1={13.785}
        x2={-13.568}
        y2={13.785}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-430">
        <Path
          id="Path_67967"
          data-name="Path 67967"
          d="M156.523,143.062l2.832,1.567.337-.191-2.834-1.567Z"
          transform="translate(-156.523 -142.871)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-180"
        x1={-12.468}
        y1={11.269}
        x2={-12.388}
        y2={11.269}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-431">
        <Path
          id="Path_67968"
          data-name="Path 67968"
          d="M149.512,143.886l1.606.869.335-.191-1.607-.869Z"
          transform="translate(-149.512 -143.696)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-181"
        x1={-19.513}
        y1={18.366}
        x2={-19.382}
        y2={18.366}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-432">
        <Path
          id="Path_67969"
          data-name="Path 67969"
          d="M156.295,147.555l1.729.973.336-.19-1.73-.973Z"
          transform="translate(-156.295 -147.365)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-182"
        x1={-19.097}
        y1={16.259}
        x2={-18.974}
        y2={16.259}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-433">
        <Path
          id="Path_67970"
          data-name="Path 67970"
          d="M142.9,140.181l1.667.937.333-.191-1.668-.937Z"
          transform="translate(-142.897 -139.99)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-183"
        x1={-18.019}
        y1={18.083}
        x2={-17.892}
        y2={18.083}
        xlinkHref="#linear-gradient-78"
      />
      <ClipPath id="clip-path-434">
        <Rect
          id="Rectangle_8841"
          data-name="Rectangle 8841"
          width={37.685}
          height={30.461}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-435">
        <Path
          id="Path_67972"
          data-name="Path 67972"
          d="M110.195,81.994l5.409,3.018V79.094l-.062-.034a.263.263,0,0,1-.031-.019Z"
          transform="translate(-110.195 -79.041)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-184"
        x1={-5.693}
        y1={7.57}
        x2={-5.642}
        y2={7.57}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-437">
        <Path
          id="Path_67973"
          data-name="Path 67973"
          d="M145.318,76.22c-.458,1.478-1.007,2.955-2.106,2.336l19.186,10.8c-2.659-1.5-2.625-5.779-4.033-6.571-.717-.4-1.226.224-1.705.852-.461.6-.894,1.209-1.457.893-1.147-.646-.76-7.193-2.532-8.19-.9-.506-1.335.746-1.73,2-.383,1.214-.728,2.429-1.421,2.038-1.408-.792-1.4-5.811-2.759-6.573a.422.422,0,0,0-.208-.061c-.529,0-.85,1.24-1.235,2.481"
          transform="translate(-143.212 -73.739)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-185"
        x1={-1.688}
        y1={2.108}
        x2={-1.675}
        y2={2.108}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#ff5900" />
        <Stop offset={0.43} stopColor="#802d00" />
        <Stop offset={0.99} />
        <Stop offset={1} />
      </LinearGradient>
      <ClipPath id="clip-path-438">
        <Path
          id="Path_67974"
          data-name="Path 67974"
          d="M140.368,77.868c-.693,1.14-1.539,2.279-2.939,1.491l19.186,10.8c-2.138-1.2-2.021-6.063-3.377-6.826-.675-.38-1.165.231-1.66.842s-1,1.231-1.71.834c-1.408-.792-.791-3.894-2.717-5.185a1.191,1.191,0,0,0-1.84.3c-.355.4-.664.806-1.194.508-1.147-.646-.553-3.643-1.961-4.435a.565.565,0,0,0-.279-.079c-.534,0-.976.876-1.509,1.753"
          transform="translate(-137.429 -76.115)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-186"
        x1={-1.822}
        y1={2.179}
        x2={-1.809}
        y2={2.179}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient-2"
      />
      <ClipPath id="clip-path-439">
        <Path
          id="Path_67975"
          data-name="Path 67975"
          d="M156.615,98.519c-2.138-1.2-2.166-2.943-3.522-3.706s-2.052-.2-3.459-1-1-1.366-2.646-2.668a3.007,3.007,0,0,0-2.178-.763,2.269,2.269,0,0,1-1.261-.264c-1.147-.645-1.066-1.967-2.494-2.132a1.539,1.539,0,0,0-1.021.209c-.467.248-.878.5-2.6-.476Z"
          transform="translate(-137.429 -87.723)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-187"
        x1={-2.21}
        y1={2.205}
        x2={-2.195}
        y2={2.205}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient-2"
      />
      <ClipPath id="clip-path-441">
        <Path
          id="Path_67976"
          data-name="Path 67976"
          d="M166.04,82.363a1.54,1.54,0,1,0,1.538-1.481,1.51,1.51,0,0,0-1.538,1.481"
          transform="translate(-166.04 -80.882)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-442">
        <Path
          id="Path_67977"
          data-name="Path 67977"
          d="M148.508,81.153a1.54,1.54,0,1,0,1.538-1.481,1.511,1.511,0,0,0-1.538,1.481"
          transform="translate(-148.508 -79.672)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-443">
        <Path
          id="Path_67978"
          data-name="Path 67978"
          d="M130.365,79.726a1.54,1.54,0,1,0,1.538-1.481,1.511,1.511,0,0,0-1.538,1.481"
          transform="translate(-130.365 -78.245)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-444">
        <Path
          id="Path_67979"
          data-name="Path 67979"
          d="M187.311,109.28a1.539,1.539,0,1,0,1.538-1.481,1.511,1.511,0,0,0-1.538,1.481"
          transform="translate(-187.311 -107.799)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-445">
        <Path
          id="Path_67980"
          data-name="Path 67980"
          d="M205.731,121.533a1.54,1.54,0,1,0,1.538-1.481,1.511,1.511,0,0,0-1.538,1.481"
          transform="translate(-205.731 -120.052)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-446">
        <Path
          id="Path_67981"
          data-name="Path 67981"
          d="M120.86,69.4a1.54,1.54,0,1,0,1.538-1.481A1.511,1.511,0,0,0,120.86,69.4"
          transform="translate(-120.86 -67.923)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-447">
        <Rect
          id="Rectangle_8857"
          data-name="Rectangle 8857"
          width={16.002}
          height={29.74}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-448">
        <Path
          id="Path_67986"
          data-name="Path 67986"
          d="M219.235,155.362c-.05.076-.128.191-.222.322a.117.117,0,0,0,0,.135,1.713,1.713,0,0,0,.756.558.118.118,0,0,0,.11-.021c.138-.116.261-.214.346-.28a.118.118,0,0,0-.016-.19l-.809-.549a.13.13,0,0,0-.074-.023.11.11,0,0,0-.093.049"
          transform="translate(-218.992 -155.313)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-188"
        x1={-43.241}
        y1={19.763}
        x2={-43.043}
        y2={19.763}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-450">
        <Path
          id="Path_67988"
          data-name="Path 67988"
          d="M214.8,143.8c.376.871.9,2.441.97,2.711.013.047.1-.011.206-.069s.232-.115.326-.071c-.1-.321-.511-.494-.527-.8a9.2,9.2,0,0,0,.026-1.108,5.009,5.009,0,0,0-.36-.695c-.078-.148-.542-.828-.6-.987-.032-.084-.077-.125-.122-.125-.133,0-.25.379.082,1.146"
          transform="translate(-214.583 -142.654)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-189"
        x1={-14.138}
        y1={10.901}
        x2={-14.071}
        y2={10.901}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-451">
        <Path
          id="Path_67989"
          data-name="Path 67989"
          d="M209.282,200.993a4.868,4.868,0,0,1-1.453.217c-.57-.053-.351.373-.191.53a2.11,2.11,0,0,0,1.281.34,1.009,1.009,0,0,1,.471.116.688.688,0,0,0,.579.078c.467-.234.3-.479.233-.861a.594.594,0,0,1,.106-.546l-.9-.295Z"
          transform="translate(-207.46 -200.572)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-190"
        x1={-17.883}
        y1={5.979}
        x2={-17.797}
        y2={5.979}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#ff516a" />
        <Stop offset={0.5} stopColor="#ff8688" />
        <Stop offset={1} stopColor="#ffbca7" />
      </LinearGradient>
      <ClipPath id="clip-path-452">
        <Path
          id="Path_67990"
          data-name="Path 67990"
          d="M210.8,181.8c.15.894.722,4.908.722,4.908.113.309.417.563,1.189.541,0,0,.4-2.936.372-3.736a5.12,5.12,0,0,0-.56-2.605.738.738,0,0,0-.612-.22c-.554,0-1.244.315-1.111,1.112"
          transform="translate(-210.784 -180.692)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-191"
        x1={-8.562}
        y1={5.801}
        x2={-8.519}
        y2={5.801}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-453">
        <Path
          id="Path_67991"
          data-name="Path 67991"
          d="M210.056,159.821c-.826.025-1.364,1.058-1.284,1.817a48.956,48.956,0,0,0,.682,5.5c.276.652,1.772.66,1.936-.289.088-.509.118-4.741.106-5.142-.028-.942-.438-1.888-1.4-1.888h-.044"
          transform="translate(-208.763 -159.82)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-192"
        x1={-6.937}
        y1={6.827}
        x2={-6.902}
        y2={6.827}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-454">
        <Path
          id="Path_67992"
          data-name="Path 67992"
          d="M198.05,203.038a4.861,4.861,0,0,1-1.457.186c-.569-.065-.359.365-.2.526a2.107,2.107,0,0,0,1.273.367,1.01,1.01,0,0,1,.469.126.69.69,0,0,0,.578.091c.472-.225.314-.472.251-.855a.6.6,0,0,1,.117-.544l-.889-.314Z"
          transform="translate(-196.219 -202.62)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-193"
        x1={-27.308}
        y1={3.48}
        x2={-27.17}
        y2={3.48}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#ff4967" />
        <Stop offset={0.5} stopColor="#ff888a" />
        <Stop offset={1} stopColor="#ffc8ae" />
      </LinearGradient>
      <ClipPath id="clip-path-455">
        <Path
          id="Path_67993"
          data-name="Path 67993"
          d="M200.9,183.284c.1.9.373,5.063.373,5.063.095.315.442.466,1.213.489,0,0,.568-2.907.591-3.707a5.118,5.118,0,0,0-.406-2.634.8.8,0,0,0-.686-.258c-.537,0-1.168.286-1.087,1.047"
          transform="translate(-200.897 -182.237)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-194"
        x1={-8.095}
        y1={5.78}
        x2={-8.053}
        y2={5.78}
        xlinkHref="#linear-gradient-14"
      />
      <ClipPath id="clip-path-456">
        <Path
          id="Path_67994"
          data-name="Path 67994"
          d="M201.511,162.711a45.2,45.2,0,0,0-.7,5.911,1.1,1.1,0,0,0,1.956.08c.182-.483,1.554-4.929,1.6-5.328a1.848,1.848,0,0,0-1.584-1.827,2.722,2.722,0,0,0-.418-.041c-.5,0-.7.267-.847,1.205"
          transform="translate(-200.787 -161.506)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-195"
        x1={-6.213}
        y1={4.051}
        x2={-6.181}
        y2={4.051}
        xlinkHref="#linear-gradient-14"
      />
      <ClipPath id="clip-path-457">
        <Path
          id="Path_67995"
          data-name="Path 67995"
          d="M204.874,138.887c-.421.37-1.115.343-1.775,1.358s-.847,5-1.053,6.717c1.516.8,4.7-.442,4.7-.442.089-1.6-.269-2.412.04-3.506.341-1.208.69-4.226-.4-4.411a2.406,2.406,0,0,0-.4-.033,1.813,1.813,0,0,0-1.111.317"
          transform="translate(-202.046 -138.57)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-196"
        x1={-10.008}
        y1={3.073}
        x2={-9.958}
        y2={3.073}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient"
      />
      <ClipPath id="clip-path-459">
        <Rect
          id="Rectangle_8869"
          data-name="Rectangle 8869"
          width={1.582}
          height={2.166}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-460">
        <Path
          id="Path_68000"
          data-name="Path 68000"
          d="M211.508,129.668a1.086,1.086,0,0,0,.12.539c.128.164-.287.454-.17.518.228.124.375-.354.517-.039.072.159-.188.449-.3.566s.043.286.271.406a2.325,2.325,0,0,0,.717.176,4.472,4.472,0,0,1,.292-.344c.091-.085.081-.15.013-.9s-1.459-.926-1.459-.926"
          transform="translate(-211.437 -129.668)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-197"
        x1={-24.365}
        y1={15.339}
        x2={-24.249}
        y2={15.339}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-461">
        <Path
          id="Path_68001"
          data-name="Path 68001"
          d="M211.542,127.458c.215.34.9.3.87,1.108s.656.638.656.638a3.524,3.524,0,0,0,.51-.416.859.859,0,0,0,.073-1.047,2.521,2.521,0,0,0-1.126-.768c-.437-.17-.284-.288-.363-.331a.325.325,0,0,0-.157-.041.634.634,0,0,0-.464.857"
          transform="translate(-211.485 -126.601)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-198"
        x1={-18.708}
        y1={10.875}
        x2={-18.619}
        y2={10.875}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#003286" />
        <Stop offset={0.5} stopColor="#005cbc" />
        <Stop offset={1} stopColor="#0085f2" />
      </LinearGradient>
      <ClipPath id="clip-path-463">
        <Path
          id="Path_68006"
          data-name="Path 68006"
          d="M201.185,128.659l.032.977a.119.119,0,0,0,.119.12c.091,0,.229-.009.392-.01.048,0,.353-.02.37-.069.1-.293-.184-.735-.256-.952a.117.117,0,0,0-.082-.077c-.175-.044-.326-.086-.43-.116a.11.11,0,0,0-.03,0,.121.121,0,0,0-.115.129"
          transform="translate(-201.185 -128.53)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-199"
        x1={-35.417}
        y1={19.75}
        x2={-35.24}
        y2={19.75}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-465">
        <Path
          id="Path_68008"
          data-name="Path 68008"
          d="M201.858,130.308c-.038.116-.095.232-.193.212.179.286,1.017.44,1.108.735a9.232,9.232,0,0,0,.243,1.081,4.984,4.984,0,0,0,.517.587c.111.125.726.672.822.812.2.294.468-.115-.208-1-.575-.754-2.068-2.39-2.2-2.633,0-.006-.007-.009-.01-.009-.02,0-.039.107-.074.215"
          transform="translate(-201.665 -130.093)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-200"
        x1={-16.242}
        y1={7.44}
        x2={-16.161}
        y2={7.44}
        xlinkHref="#linear-gradient-11"
      />
      <ClipPath id="clip-path-466">
        <Rect
          id="Rectangle_8876"
          data-name="Rectangle 8876"
          width={19.897}
          height={26.758}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-467">
        <Path
          id="Path_68014"
          data-name="Path 68014"
          d="M130.191,196.12c-.031.339.251.54.251.837h.247l-.124-.693c.4,0,.92.7,1.424.7.529-.006.679-.167.719-.333s-.437-.086-.9-.368-.411-1.113-.411-1.113a2.289,2.289,0,0,1-.879-.092c0,.253-.289.686-.324,1.067"
          transform="translate(-130.188 -195.053)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-201"
        x1={-14.047}
        y1={6.682}
        x2={-13.939}
        y2={6.682}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-469">
        <Path
          id="Path_68016"
          data-name="Path 68016"
          d="M142.139,200.313c-.033.339.248.542.246.839h.248l-.12-.694c.4,0,.916.707,1.42.7.529,0,.68-.163.721-.329s-.437-.089-.9-.373-.4-1.115-.4-1.115a2.281,2.281,0,0,1-.878-.1c0,.253-.293.684-.33,1.065"
          transform="translate(-142.136 -199.248)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-202"
        x1={-20.702}
        y1={4.596}
        x2={-20.557}
        y2={4.596}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-470">
        <Path
          id="Path_68017"
          data-name="Path 68017"
          d="M130.179,154.372a4.027,4.027,0,0,0-.624,2.453,24.681,24.681,0,0,1-.182,5.342,6.927,6.927,0,0,1,1.9.62,3.839,3.839,0,0,0,3.913.012,25.316,25.316,0,0,0-2.354-9.3l-2.106-.36a5.582,5.582,0,0,1-.545,1.234"
          transform="translate(-129.373 -153.138)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-203"
        x1={-6.142}
        y1={2.239}
        x2={-6.095}
        y2={2.239}
        gradientTransform="matrix(1, 0, 0, 1, 0, 0)"
        xlinkHref="#radial-gradient-2"
      />
      <ClipPath id="clip-path-471">
        <Path
          id="Path_68018"
          data-name="Path 68018"
          d="M133.366,140.167c-.828.2-.887,1.4-.838,2.158a6.73,6.73,0,0,1-.154,2.644,3.157,3.157,0,0,0,3.3.463,9.188,9.188,0,0,1-.5-2.6c.021-.1.607-.439.333-1.022a10.945,10.945,0,0,1-.392-1.087,1.282,1.282,0,0,0-1.252-.615,2.154,2.154,0,0,0-.5.058"
          transform="translate(-132.374 -140.109)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-204"
        x1={-9.694}
        y1={4.639}
        x2={-9.621}
        y2={4.639}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-473">
        <Rect
          id="Rectangle_8883"
          data-name="Rectangle 8883"
          width={17.648}
          height={35.295}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-474">
        <Path
          id="Path_68034"
          data-name="Path 68034"
          d="M82.371,172.7a6.407,6.407,0,0,0-1.12.627c-.132.128-.234.556-.124.679a.927.927,0,0,0,.324.166,2.95,2.95,0,0,0,1.843-.773c.172-.151.461-.5.365-.71-.04-.086-.236-.134-.489-.134a2.308,2.308,0,0,0-.8.145"
          transform="translate(-81.08 -172.552)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-205"
        x1={-6.935}
        y1={7.078}
        x2={-6.848}
        y2={7.078}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-475">
        <Path
          id="Path_68035"
          data-name="Path 68035"
          d="M84.457,176.484a.108.108,0,1,0,.1-.135.123.123,0,0,0-.1.135"
          transform="translate(-84.457 -176.349)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-206"
        x1={-113.06}
        y1={66.626}
        x2={-111.722}
        y2={66.626}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-477">
        <Path
          id="Path_68039"
          data-name="Path 68039"
          d="M75.694,169.505a6.438,6.438,0,0,0-1.12.627c-.132.128-.234.556-.123.679a.928.928,0,0,0,.324.166,2.951,2.951,0,0,0,1.843-.773c.171-.151.461-.5.365-.71-.04-.086-.236-.134-.488-.134a2.311,2.311,0,0,0-.8.145"
          transform="translate(-74.403 -169.36)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-207"
        x1={-6.356}
        y1={7.402}
        x2={-6.269}
        y2={7.402}
        xlinkHref="#linear-gradient-12"
      />
      <ClipPath id="clip-path-478">
        <Path
          id="Path_68040"
          data-name="Path 68040"
          d="M77.78,173.292a.108.108,0,1,0,.1-.136.122.122,0,0,0-.1.136"
          transform="translate(-77.78 -173.156)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-208"
        x1={-104.123}
        y1={69.855}
        x2={-102.784}
        y2={69.855}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-480">
        <Path
          id="Path_68043"
          data-name="Path 68043"
          d="M74.434,151.421a4.445,4.445,0,0,0-.126,1.643c.072.8.289,3.412.289,3.412a1.18,1.18,0,0,0,1.23-.083s.285-3.671.312-4.8a.578.578,0,0,0-.632-.67,1.381,1.381,0,0,0-1.074.5"
          transform="translate(-74.287 -150.919)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-209"
        x1={-3.19}
        y1={12.002}
        x2={-3.143}
        y2={12.002}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#003286" />
        <Stop offset={0.77} stopColor="#005cbc" />
        <Stop offset={1} stopColor="#0085f2" />
      </LinearGradient>
      <ClipPath id="clip-path-481">
        <Path
          id="Path_68044"
          data-name="Path 68044"
          d="M73.8,131.415a3.118,3.118,0,0,0-.752,2.517c.037.434.329,2.832.449,3.524.179,1.03,1.727,1.1,1.727.335,0-.744,1.034-5.154-.04-6.088a1.473,1.473,0,0,0-.96-.4.732.732,0,0,0-.423.111"
          transform="translate(-73.036 -131.304)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-210"
        x1={-6.163}
        y1={4.204}
        x2={-6.079}
        y2={4.204}
        xlinkHref="#linear-gradient-209"
      />
      <ClipPath id="clip-path-482">
        <Path
          id="Path_68045"
          data-name="Path 68045"
          d="M80.461,154.495a6.294,6.294,0,0,0-.041,1.768c.072.8.3,3.55.3,3.55a1.014,1.014,0,0,0,1.225-.294s.279-3.6.306-4.731c.013-.541-.354-.725-.76-.725a1.289,1.289,0,0,0-1.03.431"
          transform="translate(-80.383 -154.063)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-211"
        x1={-11.568}
        y1={3.995}
        x2={-11.424}
        y2={3.995}
        xlinkHref="#linear-gradient-209"
      />
      <ClipPath id="clip-path-483">
        <Path
          id="Path_68046"
          data-name="Path 68046"
          d="M79.2,134.438a1.843,1.843,0,0,0-.634,1.875c.037.434.493,3.427.613,4.119.179,1.03,1.727,1.1,1.727.335,0-.744.656-5.711-.168-6.389a1.025,1.025,0,0,0-.667-.241,1.577,1.577,0,0,0-.872.3"
          transform="translate(-78.534 -134.136)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-212"
        x1={-6.838}
        y1={4.022}
        x2={-6.751}
        y2={4.022}
        xlinkHref="#linear-gradient-209"
      />
      <ClipPath id="clip-path-485">
        <Path
          id="Path_68048"
          data-name="Path 68048"
          d="M73.947,101.382c-.175-.424-1.051-.048-.743.393a.694.694,0,0,0-.363,1.159c-.025.523.36.753.586.958.05.045.233.223.233.223s.838-.093.989-.333a1.206,1.206,0,0,0,.063-.923c-.112-.5.26-.4.08-.8.137-.159.327.049.327.049.038-.639-.357-.952-.72-.952a.552.552,0,0,0-.453.222"
          transform="translate(-72.631 -101.16)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-213"
        x1={-4.764}
        y1={10.134}
        x2={-4.695}
        y2={10.134}
        xlinkHref="#linear-gradient-209"
      />
      <ClipPath id="clip-path-486">
        <Path
          id="Path_68049"
          data-name="Path 68049"
          d="M71.194,114.517c-1.139.23-.909,1.908-.5,3.1a12.354,12.354,0,0,1,.3,3.476c.523.719,1.868.614,2.486.533a2.625,2.625,0,0,0,2.025-1.012,23.192,23.192,0,0,1-1.025-4.722c-.211-1.12-1.821-1.41-2.767-1.41a2.849,2.849,0,0,0-.526.04"
          transform="translate(-70.36 -114.477)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-214"
        x1={-3.338}
        y1={4.69}
        x2={-3.289}
        y2={4.69}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#ffdfb9" />
        <Stop offset={0.77} stopColor="#f48887" />
        <Stop offset={1} stopColor="#e83155" />
      </LinearGradient>
      <ClipPath id="clip-path-488">
        <Rect
          id="Rectangle_8901"
          data-name="Rectangle 8901"
          width={17.026}
          height={15.104}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-489">
        <Rect
          id="Rectangle_8906"
          data-name="Rectangle 8906"
          width={25.977}
          height={22.513}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-490">
        <Path
          id="Path_68054"
          data-name="Path 68054"
          d="M284.865,95.767l.011,7.571a1.037,1.037,0,0,0,.536.792l7.414,4c.3.16.535.064.535-.213l-.011-7.571a1.037,1.037,0,0,0-.536-.792l-7.413-4a.573.573,0,0,0-.267-.077.258.258,0,0,0-.268.29"
          transform="translate(-284.865 -95.477)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-215"
        x1={-5.066}
        y1={2.77}
        x2={-5.048}
        y2={2.77}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-491">
        <Path
          id="Path_68055"
          data-name="Path 68055"
          d="M284.865,95.757l.011,7.571a1.037,1.037,0,0,0,.536.791l7.414,4c.3.16.535.065.535-.213l-7.6-4.029a1.037,1.037,0,0,1-.536-.792l.036-7.594a.314.314,0,0,0-.122-.024.269.269,0,0,0-.278.292"
          transform="translate(-284.865 -95.465)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-216"
        x1={-5.028}
        y1={2.789}
        x2={-5.01}
        y2={2.789}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#003996" />
        <Stop offset={0.5} stopColor="#005fc5" />
        <Stop offset={1} stopColor="#0085f3" />
      </LinearGradient>
      <ClipPath id="clip-path-492">
        <Path
          id="Path_68056"
          data-name="Path 68056"
          d="M284.866,95.752l0,1.363,8.493,10.79-.005-7.627a1.025,1.025,0,0,0-.536-.783L285.4,95.542a.579.579,0,0,0-.267-.077.257.257,0,0,0-.268.287"
          transform="translate(-284.866 -95.465)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-217"
        x1={-5.629}
        y1={2.787}
        x2={-5.609}
        y2={2.787}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} />
        <Stop offset={0.36} stopColor="#5b5b5b" />
        <Stop offset={0.71} stopColor="#b6b6b6" />
        <Stop offset={0.86} stopColor="#dbdbdb" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <ClipPath id="clip-path-493">
        <Path
          id="Path_68057"
          data-name="Path 68057"
          d="M289.243,116.645l.633.365v-2.017l-.633-.366Z"
          transform="translate(-289.243 -114.628)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-218"
        x1={-33.335}
        y1={49.352}
        x2={-33.219}
        y2={49.352}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#ffdfb9" />
        <Stop offset={0.5} stopColor="#f48887" />
        <Stop offset={1} stopColor="#e83155" />
      </LinearGradient>
      <ClipPath id="clip-path-494">
        <Path
          id="Path_68058"
          data-name="Path 68058"
          d="M294.1,116.857l.633.365V114.2l-.633-.365Z"
          transform="translate(-294.095 -113.835)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-219"
        x1={-23.71}
        y1={45.094}
        x2={-23.628}
        y2={45.094}
        xlinkHref="#linear-gradient-198"
      />
      <ClipPath id="clip-path-495">
        <Path
          id="Path_68059"
          data-name="Path 68059"
          d="M298.947,116.929l.633.366v-4.08l-.633-.366Z"
          transform="translate(-298.947 -112.849)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-220"
        x1={-18.325}
        y1={48.223}
        x2={-18.262}
        y2={48.223}
        xlinkHref="#linear-gradient-22"
      />
      <ClipPath id="clip-path-496">
        <Path
          id="Path_68060"
          data-name="Path 68060"
          d="M303.8,120.213l.633.365v-3.893l-.633-.365Z"
          transform="translate(-303.799 -116.32)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-221"
        x1={-19.458}
        y1={46.078}
        x2={-19.393}
        y2={46.078}
        xlinkHref="#linear-gradient-218"
      />
      <ClipPath id="clip-path-497">
        <Path
          id="Path_68061"
          data-name="Path 68061"
          d="M308.651,117.986l.633.366v-5.843l-.633-.365Z"
          transform="translate(-308.651 -112.143)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-222"
        x1={-136.151}
        y1={5.79}
        x2={-135.71}
        y2={5.79}
        xlinkHref="#linear-gradient-14"
      />
      <ClipPath id="clip-path-498">
        <Path
          id="Path_68062"
          data-name="Path 68062"
          d="M245.052,195.625l-7.39,4.266a.96.96,0,0,0,0,1.662l7.39,4.267a3.986,3.986,0,0,0,3.975,0l7.39-4.266a.96.96,0,0,0,0-1.662l-7.389-4.267a3.986,3.986,0,0,0-3.975,0"
          transform="translate(-237.182 -195.094)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-223"
        x1={-5.946}
        y1={0.856}
        x2={-5.922}
        y2={0.856}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#4affc7" />
        <Stop offset={0.64} stopColor="#43d6d8" />
        <Stop offset={1} stopColor="#3badea" />
      </LinearGradient>
      <ClipPath id="clip-path-499">
        <Rect
          id="Rectangle_8916"
          data-name="Rectangle 8916"
          width={22.751}
          height={20.356}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-500">
        <Path
          id="Path_68064"
          data-name="Path 68064"
          d="M259.406,206.918c-1.566.94-1.541,2.421.056,3.308a6.331,6.331,0,0,0,5.729-.1c1.566-.94,1.541-2.421-.056-3.307a5.8,5.8,0,0,0-2.756-.637,5.914,5.914,0,0,0-2.973.735"
          transform="translate(-258.247 -206.183)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-224"
        x1={-8.048}
        y1={1.962}
        x2={-8.016}
        y2={1.962}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#afafdc" />
        <Stop offset={0.64} stopColor="#a2a2d9" />
        <Stop offset={1} stopColor="#9696d6" />
      </LinearGradient>
      <ClipPath id="clip-path-501">
        <Path
          id="Path_68065"
          data-name="Path 68065"
          d="M262.3,208.939h0a1.377,1.377,0,0,0,.847,1.2,4.434,4.434,0,0,0,4.012-.068,1.418,1.418,0,0,0,.81-1.154h0v-.024l-.031-1.509-5.672-.017Z"
          transform="translate(-262.272 -207.363)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-225"
        x1={-12.851}
        y1={2.753}
        x2={-12.802}
        y2={2.753}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-502">
        <Path
          id="Path_68066"
          data-name="Path 68066"
          d="M263.075,202.128a1.223,1.223,0,0,0,.04,2.316,4.435,4.435,0,0,0,4.012-.068,1.223,1.223,0,0,0-.04-2.316,4.059,4.059,0,0,0-1.93-.446,4.14,4.14,0,0,0-2.082.515"
          transform="translate(-262.264 -201.613)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-226"
        x1={-11.691}
        y1={3.173}
        x2={-11.646}
        y2={3.173}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-503">
        <Path
          id="Path_68067"
          data-name="Path 68067"
          d="M265.059,203.847c-.72.361-.831.9-.335,1.3a1.754,1.754,0,0,0,.366.223,4.116,4.116,0,0,0,3.16-.045,1.7,1.7,0,0,0,.325-.207c.516-.422.395-.968-.357-1.316a3.722,3.722,0,0,0-1.519-.293,3.793,3.793,0,0,0-1.64.338"
          transform="translate(-264.42 -203.509)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-227"
        x1={-15.16}
        y1={4.59}
        x2={-15.102}
        y2={4.59}
        xlinkHref="#linear-gradient"
      />
      <ClipPath id="clip-path-504">
        <Path
          id="Path_68068"
          data-name="Path 68068"
          d="M266.377,204.866a2.042,2.042,0,0,0-.87,1.047,1.751,1.751,0,0,0,.366.223,4.117,4.117,0,0,0,3.16-.045,1.71,1.71,0,0,0,.325-.207,2.06,2.06,0,0,0-2.981-1.017"
          transform="translate(-265.507 -204.571)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-228"
        x1={-17.99}
        y1={2.713}
        x2={-17.922}
        y2={2.713}
        xlinkHref="#linear-gradient-218"
      />
      <ClipPath id="clip-path-505">
        <Path
          id="Path_68069"
          data-name="Path 68069"
          d="M268.922,191.213a1.181,1.181,0,0,0-.387,1.594,1.111,1.111,0,0,0,1.549.4,1.182,1.182,0,0,0,.387-1.595,1.122,1.122,0,0,0-.969-.564,1.1,1.1,0,0,0-.58.166"
          transform="translate(-268.374 -191.047)"
          fill="none"
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient-229"
        x1={-29.03}
        y1={5.587}
        x2={-28.922}
        y2={5.587}
        xlinkHref="#linear-gradient-218"
      />
      <Image
        id="image"
        width={1.677}
        height={1.118}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAABqADAAQAAAABAAAABAAAAAAymEz/AAAAF0lEQVQIHWP8//+/EgMWwIRFDCxEugQAM50DJ/eDbdMAAAAASUVORK5CYII="
      />
      <Image
        id="image-2"
        width={1.956}
        height={1.118}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAECAYAAABCxiV9AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAB6ADAAQAAAABAAAABAAAAAC1Poe8AAAAF0lEQVQIHWP8//+/EgMOwIRDHCxMviQAZd0DJ9OJ4wwAAAAASUVORK5CYII="
      />
    </Defs>
    <G id="Group_62286" data-name="Group 62286" clipPath="url(#clip-path)">
      <G
        id="Group_61246"
        data-name="Group 61246"
        transform="translate(2.656 44.472)"
      >
        <G
          id="Group_61245"
          data-name="Group 61245"
          clipPath="url(#clip-path-2)"
        >
          <Rect
            id="Rectangle_8402"
            data-name="Rectangle 8402"
            width={28.68}
            height={19.557}
            transform="translate(0)"
            fill="url(#radial-gradient)"
          />
        </G>
      </G>
      <G
        id="Group_61248"
        data-name="Group 61248"
        transform="translate(76.72 43.746)"
      >
        <G
          id="Group_61247"
          data-name="Group 61247"
          clipPath="url(#clip-path-3)"
        >
          <Rect
            id="Rectangle_8403"
            data-name="Rectangle 8403"
            width={10.862}
            height={12.325}
            transform="translate(0)"
            fill="url(#radial-gradient-2)"
          />
        </G>
      </G>
      <G
        id="Group_61250"
        data-name="Group 61250"
        transform="translate(55.274 26.696)"
      >
        <G
          id="Group_61249"
          data-name="Group 61249"
          clipPath="url(#clip-path-4)"
        >
          <Rect
            id="Rectangle_8404"
            data-name="Rectangle 8404"
            width={1.34}
            height={2.901}
            transform="matrix(0.015, -1, 1, 0.015, -0.19, 1.295)"
            fill="url(#linear-gradient)"
          />
        </G>
      </G>
      <G
        id="Group_61252"
        data-name="Group 61252"
        transform="translate(56.889 20.87)"
      >
        <G
          id="Group_61251"
          data-name="Group 61251"
          clipPath="url(#clip-path-5)"
        >
          <Rect
            id="Rectangle_8405"
            data-name="Rectangle 8405"
            width={6.619}
            height={2.252}
            transform="translate(-0.034 6.612) rotate(-89.824)"
            fill="url(#linear-gradient-2)"
          />
        </G>
      </G>
      <G id="Group_61254" data-name="Group 61254" transform="translate(44.901)">
        <G
          id="Group_61253"
          data-name="Group 61253"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67466"
            data-name="Path 67466"
            d="M206.565,74.7a.953.953,0,0,1,.867.844c0,.287-.33,2.922-.728,5.109a.346.346,0,0,1-.281.283c.324.059.636.009.689-.282.4-2.187.728-4.822.728-5.109,0-.618-.775-.947-1.276-.845"
            transform="translate(-193.635 -53.809)"
            fill="#002e8a"
          />
        </G>
      </G>
      <G
        id="Group_61256"
        data-name="Group 61256"
        transform="translate(57.331 15.507)"
      >
        <G
          id="Group_61255"
          data-name="Group 61255"
          clipPath="url(#clip-path-7)"
        >
          <Rect
            id="Rectangle_8407"
            data-name="Rectangle 8407"
            width={7.575}
            height={3.062}
            transform="translate(-0.284 7.476) rotate(-88.065)"
            fill="url(#linear-gradient-3)"
          />
        </G>
      </G>
      <G id="Group_61258" data-name="Group 61258" transform="translate(44.901)">
        <G
          id="Group_61257"
          data-name="Group 61257"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67468"
            data-name="Path 67468"
            d="M209.672,70.4a.825.825,0,0,0,.57-.447c.178-.576.407-2.254.548-2.838.059-.245.136-.541.207-.847-.148.269-.952,1.707-.971,1.813-.078.447-.22,1.548-.354,2.319"
            transform="translate(-195.976 -47.75)"
            fill="#002e8a"
          />
        </G>
      </G>
      <G
        id="Group_61260"
        data-name="Group 61260"
        transform="translate(60.66 28.525)"
      >
        <G
          id="Group_61259"
          data-name="Group 61259"
          clipPath="url(#clip-path-9)"
        >
          <Rect
            id="Rectangle_8409"
            data-name="Rectangle 8409"
            width={1.23}
            height={2.041}
            transform="matrix(1, -0.002, 0.002, 1, -0.032, 0)"
            fill="url(#linear-gradient-4)"
          />
        </G>
      </G>
      <G
        id="Group_61262"
        data-name="Group 61262"
        transform="translate(60.012 22.619)"
      >
        <G
          id="Group_61261"
          data-name="Group 61261"
          clipPath="url(#clip-path-10)"
        >
          <Rect
            id="Rectangle_8410"
            data-name="Rectangle 8410"
            width={1.957}
            height={6.463}
            transform="matrix(1, -0.002, 0.002, 1, -0.012, 0)"
            fill="url(#linear-gradient-5)"
          />
        </G>
      </G>
      <G id="Group_61264" data-name="Group 61264" transform="translate(44.901)">
        <G
          id="Group_61263"
          data-name="Group 61263"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67471"
            data-name="Path 67471"
            d="M216.848,80.951a.8.8,0,0,1,.648.62c.051.289.2,3.011.208,5.3a.357.357,0,0,1-.151.3c.338-.007.648-.122.648-.426,0-2.229-.156-4.884-.208-5.165a.957.957,0,0,0-1.145-.628"
            transform="translate(-201.146 -58.317)"
            fill="#002e8a"
          />
        </G>
      </G>
      <G
        id="Group_61266"
        data-name="Group 61266"
        transform="translate(59.398 17.479)"
      >
        <G
          id="Group_61265"
          data-name="Group 61265"
          clipPath="url(#clip-path-12)"
        >
          <Rect
            id="Rectangle_8412"
            data-name="Rectangle 8412"
            width={2.632}
            height={7.161}
            transform="translate(-0.013 0) rotate(-0.098)"
            fill="url(#linear-gradient-6)"
          />
        </G>
      </G>
      <G id="Group_61268" data-name="Group 61268" transform="translate(44.901)">
        <G
          id="Group_61267"
          data-name="Group 61267"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67473"
            data-name="Path 67473"
            d="M219.463,63.5a.046.046,0,0,1,.01.018,21.965,21.965,0,0,1,.01,3.03c-.026.567-.1,3.475-.108,3.505a.674.674,0,0,0,.489-.541c.065-.589.09-2.311.117-2.9a21.219,21.219,0,0,0-.01-2.978c-.017-.087-.222-.121-.508-.136"
            transform="translate(-202.967 -45.757)"
            fill="#002e8a"
          />
          <Path
            id="Path_67474"
            data-name="Path 67474"
            d="M191.542,46.243a1.074,1.074,0,0,0-.411-.293c-.266-.049-.453-.309-.5-.146-.038.129.135.226.217.281.032.022.121.061.058.093-.174.089-1.016-.151-1.083-.082s.03.119.062.141c.227.159.112.433.4.551a3.368,3.368,0,0,0,.874.133,4.432,4.432,0,0,1,.641.207s.242-.6.193-.62a1.5,1.5,0,0,1-.45-.266"
            transform="translate(-181.656 -32.965)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_61270"
        data-name="Group 61270"
        transform="translate(54.3 12.84)"
      >
        <G
          id="Group_61269"
          data-name="Group 61269"
          clipPath="url(#clip-path-14)"
        >
          <Rect
            id="Rectangle_8414"
            data-name="Rectangle 8414"
            width={4.294}
            height={4.392}
            transform="translate(-1.065 0.874) rotate(-46.406)"
            fill="url(#linear-gradient-7)"
          />
        </G>
      </G>
      <G
        id="Group_61272"
        data-name="Group 61272"
        transform="translate(56.863 9.841)"
      >
        <G
          id="Group_61271"
          data-name="Group 61271"
          clipPath="url(#clip-path-15)"
        >
          <Rect
            id="Rectangle_8415"
            data-name="Rectangle 8415"
            width={5.162}
            height={5.107}
            transform="matrix(0.69, -0.724, 0.724, 0.69, -2.468, 2.318)"
            fill="url(#linear-gradient-8)"
          />
        </G>
      </G>
      <G
        id="Group_61274"
        data-name="Group 61274"
        transform="translate(57.486 9.368)"
      >
        <G
          id="Group_61273"
          data-name="Group 61273"
          clipPath="url(#clip-path-16)"
        >
          <Rect
            id="Rectangle_8416"
            data-name="Rectangle 8416"
            width={5.234}
            height={9.243}
            transform="translate(-0.037 0)"
            fill="url(#linear-gradient-9)"
          />
        </G>
      </G>
      <G
        id="Group_61276"
        data-name="Group 61276"
        transform="translate(58.789 9.716)"
      >
        <G
          id="Group_61275"
          data-name="Group 61275"
          clipPath="url(#clip-path-17)"
        >
          <Rect
            id="Rectangle_8417"
            data-name="Rectangle 8417"
            width={1.521}
            height={3.452}
            transform="translate(-0.453 0.063) rotate(-7.875)"
            fill="url(#linear-gradient-10)"
          />
        </G>
      </G>
      <G id="Group_61278" data-name="Group 61278" transform="translate(44.901)">
        <G
          id="Group_61277"
          data-name="Group 61277"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67479"
            data-name="Path 67479"
            d="M214.236,33.219c-.491-.382-1.384.211-1.587.961a12.563,12.563,0,0,0-.085,1.719c.012.457.022.739.022.739a17.3,17.3,0,0,1,.924-1.677,8.676,8.676,0,0,1,.609-.906c.387-.481.276-.713.118-.836"
            transform="translate(-198.058 -23.85)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61280"
        data-name="Group 61280"
        transform="translate(59.395 10.597)"
      >
        <G
          id="Group_61279"
          data-name="Group 61279"
          clipPath="url(#clip-path-19)"
        >
          <Rect
            id="Rectangle_8419"
            data-name="Rectangle 8419"
            width={1.419}
            height={2.045}
            transform="translate(-0.479 0.129) rotate(-15.276)"
            fill="url(#linear-gradient-11)"
          />
        </G>
      </G>
      <G
        id="Group_61282"
        data-name="Group 61282"
        transform="translate(59.394 10.598)"
      >
        <G
          id="Group_61281"
          data-name="Group 61281"
          clipPath="url(#clip-path-20)"
        >
          <Rect
            id="Rectangle_8420"
            data-name="Rectangle 8420"
            width={1.257}
            height={2.559}
            transform="matrix(0.977, -0.211, 0.211, 0.977, -0.507, 0.109)"
            fill="url(#linear-gradient-12)"
          />
        </G>
      </G>
      <G
        id="Group_61284"
        data-name="Group 61284"
        transform="translate(59.4 9.37)"
      >
        <G
          id="Group_61283"
          data-name="Group 61283"
          clipPath="url(#clip-path-21)"
        >
          <Rect
            id="Rectangle_8421"
            data-name="Rectangle 8421"
            width={3.931}
            height={4.172}
            transform="translate(-1.8 1.452) rotate(-38.897)"
            fill="url(#linear-gradient-13)"
          />
        </G>
      </G>
      <G id="Group_61286" data-name="Group 61286" transform="translate(44.901)">
        <G
          id="Group_61285"
          data-name="Group 61285"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67483"
            data-name="Path 67483"
            d="M215.244,63.375a9.825,9.825,0,0,1-1.2-.058,2.443,2.443,0,0,0,1.2.058"
            transform="translate(-199.124 -45.622)"
            fill="#002e8a"
          />
          <Path
            id="Path_67484"
            data-name="Path 67484"
            d="M218.347,63.464c.134,0,.262.006.377.012-.036-.053-.177-.038-.377-.012"
            transform="translate(-202.226 -45.711)"
            fill="#002e8a"
          />
        </G>
      </G>
      <G
        id="Group_61288"
        data-name="Group 61288"
        transform="translate(53.129 11.184)"
      >
        <G
          id="Group_61287"
          data-name="Group 61287"
          clipPath="url(#clip-path-23)"
        >
          <Rect
            id="Rectangle_8423"
            data-name="Rectangle 8423"
            width={7.406}
            height={4.47}
            transform="translate(-0.121 0.003) rotate(-1.407)"
            fill="url(#linear-gradient-14)"
          />
        </G>
      </G>
      <G
        id="Group_61290"
        data-name="Group 61290"
        transform="translate(53.124 13.022)"
      >
        <G
          id="Group_61289"
          data-name="Group 61289"
          clipPath="url(#clip-path-24)"
        >
          <Rect
            id="Rectangle_8424"
            data-name="Rectangle 8424"
            width={7.337}
            height={2.711}
            transform="matrix(1, -0.025, 0.025, 1, -0.062, 0.002)"
            fill="url(#linear-gradient-15)"
          />
        </G>
      </G>
      <G id="Group_61292" data-name="Group 61292" transform="translate(44.901)">
        <G
          id="Group_61291"
          data-name="Group 61291"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67487"
            data-name="Path 67487"
            d="M197.15,42.747l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-186.676 -30.722)"
            fill="#002e8a"
          />
          <Path
            id="Path_67488"
            data-name="Path 67488"
            d="M198.053,43.264l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-187.326 -31.095)"
            fill="#002e8a"
          />
          <Path
            id="Path_67489"
            data-name="Path 67489"
            d="M198.974,43.791l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.061.061,0,0,0,.053,0l.14-.086c.015-.009.015-.023,0-.031"
            transform="translate(-187.99 -31.475)"
            fill="#002e8a"
          />
          <Path
            id="Path_67490"
            data-name="Path 67490"
            d="M199.9,44.324l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-188.66 -31.858)"
            fill="#002e8a"
          />
          <Path
            id="Path_67491"
            data-name="Path 67491"
            d="M200.824,44.851l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-189.324 -32.238)"
            fill="#002e8a"
          />
          <Path
            id="Path_67492"
            data-name="Path 67492"
            d="M201.746,45.377l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.014-.009.015-.023,0-.032"
            transform="translate(-189.988 -32.618)"
            fill="#002e8a"
          />
          <Path
            id="Path_67493"
            data-name="Path 67493"
            d="M202.667,45.905l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-190.651 -32.998)"
            fill="#002e8a"
          />
          <Path
            id="Path_67494"
            data-name="Path 67494"
            d="M203.589,46.432l-.18-.1a.056.056,0,0,0-.053,0l-.141.087a.017.017,0,0,0,0,.032l.18.1a.058.058,0,0,0,.053,0l.14-.086c.015-.009.015-.023,0-.031"
            transform="translate(-191.315 -33.378)"
            fill="#002e8a"
          />
          <Path
            id="Path_67495"
            data-name="Path 67495"
            d="M204.51,46.96l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.014-.009.015-.023,0-.031"
            transform="translate(-191.979 -33.757)"
            fill="#002e8a"
          />
          <Path
            id="Path_67496"
            data-name="Path 67496"
            d="M205.434,47.488l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.645 -34.138)"
            fill="#002e8a"
          />
          <Path
            id="Path_67497"
            data-name="Path 67497"
            d="M206.355,48.015l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-193.308 -34.518)"
            fill="#002e8a"
          />
          <Path
            id="Path_67498"
            data-name="Path 67498"
            d="M207.277,48.543l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-193.973 -34.898)"
            fill="#002e8a"
          />
          <Path
            id="Path_67499"
            data-name="Path 67499"
            d="M208.2,49.07l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.024,0,.032l.18.1a.06.06,0,0,0,.053,0l.141-.087a.017.017,0,0,0,0-.031"
            transform="translate(-194.636 -35.278)"
            fill="#002e8a"
          />
          <Path
            id="Path_67500"
            data-name="Path 67500"
            d="M209.119,49.6l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-195.3 -35.658)"
            fill="#002e8a"
          />
          <Path
            id="Path_67501"
            data-name="Path 67501"
            d="M210.04,50.125l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.087c.015-.009.015-.023,0-.031"
            transform="translate(-195.964 -36.038)"
            fill="#002e8a"
          />
          <Path
            id="Path_67502"
            data-name="Path 67502"
            d="M196.805,43.464l-.607-.347a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.606.347a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-186.12 -31.063)"
            fill="#002e8a"
          />
          <Path
            id="Path_67503"
            data-name="Path 67503"
            d="M198.831,44.625l-.18-.1a.058.058,0,0,0-.053,0l-.141.087c-.015.009-.015.023,0,.031l.18.1a.06.06,0,0,0,.053,0l.141-.087c.015-.009.015-.023,0-.031"
            transform="translate(-187.887 -32.075)"
            fill="#002e8a"
          />
          <Path
            id="Path_67504"
            data-name="Path 67504"
            d="M199.752,45.151l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.179.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-188.551 -32.454)"
            fill="#002e8a"
          />
          <Path
            id="Path_67505"
            data-name="Path 67505"
            d="M200.675,45.679l-.18-.1a.057.057,0,0,0-.053,0l-.141.086a.016.016,0,0,0,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-189.216 -32.835)"
            fill="#002e8a"
          />
          <Path
            id="Path_67506"
            data-name="Path 67506"
            d="M201.595,46.206l-.18-.1a.06.06,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086a.017.017,0,0,0,0-.032"
            transform="translate(-189.879 -33.215)"
            fill="#002e8a"
          />
          <Path
            id="Path_67507"
            data-name="Path 67507"
            d="M202.516,46.733l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-190.543 -33.594)"
            fill="#002e8a"
          />
          <Path
            id="Path_67508"
            data-name="Path 67508"
            d="M203.438,47.26l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-191.207 -33.974)"
            fill="#002e8a"
          />
          <Path
            id="Path_67509"
            data-name="Path 67509"
            d="M204.361,47.789l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-191.872 -34.355)"
            fill="#002e8a"
          />
          <Path
            id="Path_67510"
            data-name="Path 67510"
            d="M205.282,48.316l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.03l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.535 -34.735)"
            fill="#002e8a"
          />
          <Path
            id="Path_67511"
            data-name="Path 67511"
            d="M206.2,48.843l-.179-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.032l.18.1a.055.055,0,0,0,.052,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-193.2 -35.115)"
            fill="#002e8a"
          />
          <Path
            id="Path_67512"
            data-name="Path 67512"
            d="M207.125,49.37l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.06.06,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-193.863 -35.494)"
            fill="#002e8a"
          />
          <Path
            id="Path_67513"
            data-name="Path 67513"
            d="M208.046,49.9l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.056.056,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-194.527 -35.875)"
            fill="#002e8a"
          />
          <Path
            id="Path_67514"
            data-name="Path 67514"
            d="M208.967,50.424l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.06.06,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-195.191 -36.254)"
            fill="#002e8a"
          />
          <Path
            id="Path_67515"
            data-name="Path 67515"
            d="M195.615,43.7l-.194-.112a.058.058,0,0,0-.053,0l-.14.086c-.015.009-.015.023,0,.031l.194.111a.055.055,0,0,0,.053,0l.141-.086c.015-.01.015-.023,0-.031"
            transform="translate(-185.56 -31.406)"
            fill="#002e8a"
          />
          <Path
            id="Path_67516"
            data-name="Path 67516"
            d="M196.574,44.254l-.194-.111a.06.06,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.194.112a.057.057,0,0,0,.053,0l.14-.086c.015-.009.015-.023,0-.031"
            transform="translate(-186.25 -31.802)"
            fill="#002e8a"
          />
          <Path
            id="Path_67517"
            data-name="Path 67517"
            d="M194.229,44.146l-.136-.078a.055.055,0,0,0-.053,0l-.355.217c-.015.009-.015.023,0,.031l.136.078a.057.057,0,0,0,.053,0l.355-.217c.015-.009.015-.023,0-.031"
            transform="translate(-184.448 -31.748)"
            fill="#002e8a"
          />
          <Path
            id="Path_67518"
            data-name="Path 67518"
            d="M195.606,44.618l-.195-.112a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.195.111a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-185.553 -32.064)"
            fill="#002e8a"
          />
          <Path
            id="Path_67519"
            data-name="Path 67519"
            d="M198.5,45.353l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-187.651 -32.6)"
            fill="#002e8a"
          />
          <Path
            id="Path_67520"
            data-name="Path 67520"
            d="M197.017,44.82l-.18-.1a.057.057,0,0,0-.054,0l-.215.131-.052.032-.089.055c-.015.009-.015.023,0,.031l.356.2a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031l-.15-.086.189-.115c.015-.01.015-.023,0-.031"
            transform="translate(-186.425 -32.216)"
            fill="#002e8a"
          />
          <Path
            id="Path_67521"
            data-name="Path 67521"
            d="M199.425,45.879l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.014.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-188.315 -32.979)"
            fill="#002e8a"
          />
          <Path
            id="Path_67522"
            data-name="Path 67522"
            d="M200.346,46.407l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-188.979 -33.359)"
            fill="#002e8a"
          />
          <Path
            id="Path_67523"
            data-name="Path 67523"
            d="M201.267,46.933l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.057.057,0,0,0,.053,0l.14-.087c.015-.009.015-.023,0-.031"
            transform="translate(-189.643 -33.739)"
            fill="#002e8a"
          />
          <Path
            id="Path_67524"
            data-name="Path 67524"
            d="M202.189,47.461l-.181-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.06.06,0,0,0,.053,0l.141-.086c.015-.01.015-.023,0-.032"
            transform="translate(-190.306 -34.119)"
            fill="#002e8a"
          />
          <Path
            id="Path_67525"
            data-name="Path 67525"
            d="M203.109,47.988l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-190.97 -34.499)"
            fill="#002e8a"
          />
          <Path
            id="Path_67526"
            data-name="Path 67526"
            d="M204.033,48.517l-.18-.1a.058.058,0,0,0-.053,0l-.141.086a.017.017,0,0,0,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-191.635 -34.88)"
            fill="#002e8a"
          />
          <Path
            id="Path_67527"
            data-name="Path 67527"
            d="M204.955,49.044l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.01.015-.023,0-.031"
            transform="translate(-192.3 -35.26)"
            fill="#002e8a"
          />
          <Path
            id="Path_67528"
            data-name="Path 67528"
            d="M205.876,49.571l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.031l.18.1a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.964 -35.639)"
            fill="#002e8a"
          />
          <Path
            id="Path_67529"
            data-name="Path 67529"
            d="M206.8,50.1l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-193.627 -36.019)"
            fill="#002e8a"
          />
          <Path
            id="Path_67530"
            data-name="Path 67530"
            d="M207.945,50.755l-.393-.225a.059.059,0,0,0-.053,0l-.141.087c-.015.009-.015.023,0,.031l.393.225a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-194.3 -36.404)"
            fill="#002e8a"
          />
          <Path
            id="Path_67531"
            data-name="Path 67531"
            d="M198.352,46.18l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.059.059,0,0,0,.053,0l.141-.087c.015-.009.015-.023,0-.031"
            transform="translate(-187.542 -33.196)"
            fill="#002e8a"
          />
          <Path
            id="Path_67532"
            data-name="Path 67532"
            d="M199.273,46.707l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.016.023,0,.032l.18.1a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-188.206 -33.575)"
            fill="#002e8a"
          />
          <Path
            id="Path_67533"
            data-name="Path 67533"
            d="M200.194,47.235l-.18-.1a.059.059,0,0,0-.053,0l-.141.087c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-188.869 -33.955)"
            fill="#002e8a"
          />
          <Path
            id="Path_67534"
            data-name="Path 67534"
            d="M201.116,47.762l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.055.055,0,0,0,.053,0l.141-.086a.017.017,0,0,0,0-.032"
            transform="translate(-189.534 -34.336)"
            fill="#002e8a"
          />
          <Path
            id="Path_67535"
            data-name="Path 67535"
            d="M202.037,48.289l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086c.014-.009.015-.023,0-.031"
            transform="translate(-190.197 -34.715)"
            fill="#002e8a"
          />
          <Path
            id="Path_67536"
            data-name="Path 67536"
            d="M202.961,48.818l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086a.017.017,0,0,0,0-.031"
            transform="translate(-190.863 -35.097)"
            fill="#002e8a"
          />
          <Path
            id="Path_67537"
            data-name="Path 67537"
            d="M203.882,49.344l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-191.527 -35.475)"
            fill="#002e8a"
          />
          <Path
            id="Path_67538"
            data-name="Path 67538"
            d="M204.8,49.873l-.18-.1a.06.06,0,0,0-.053,0l-.141.086c-.015.009-.015.024,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086c.014-.009.015-.023,0-.031"
            transform="translate(-192.19 -35.857)"
            fill="#002e8a"
          />
          <Path
            id="Path_67539"
            data-name="Path 67539"
            d="M205.723,50.4l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.853 -36.235)"
            fill="#002e8a"
          />
          <Path
            id="Path_67540"
            data-name="Path 67540"
            d="M206.646,50.926l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-193.518 -36.615)"
            fill="#002e8a"
          />
          <Path
            id="Path_67541"
            data-name="Path 67541"
            d="M207.611,51.479l-.224-.128a.059.059,0,0,0-.053,0l-.141.086c-.015.01-.015.024,0,.032l.224.128a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-194.182 -36.996)"
            fill="#002e8a"
          />
          <Path
            id="Path_67542"
            data-name="Path 67542"
            d="M194.838,45.087l-.194-.111a.058.058,0,0,0-.053,0l-.141.087c-.015.009-.015.023,0,.031l.194.112a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-185 -32.403)"
            fill="#002e8a"
          />
          <Path
            id="Path_67543"
            data-name="Path 67543"
            d="M195.883,45.679l-.238-.136a.056.056,0,0,0-.053,0l-.14.086c-.015.009-.015.023,0,.031l.237.136a.058.058,0,0,0,.053,0l.141-.087c.015-.009.015-.023,0-.031"
            transform="translate(-185.721 -32.811)"
            fill="#002e8a"
          />
          <Path
            id="Path_67544"
            data-name="Path 67544"
            d="M196.961,46.3l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-186.54 -33.28)"
            fill="#002e8a"
          />
          <Path
            id="Path_67545"
            data-name="Path 67545"
            d="M197.882,46.824l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-187.204 -33.66)"
            fill="#002e8a"
          />
          <Path
            id="Path_67546"
            data-name="Path 67546"
            d="M198.8,47.351l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-187.867 -34.04)"
            fill="#002e8a"
          />
          <Path
            id="Path_67547"
            data-name="Path 67547"
            d="M199.725,47.878l-.18-.1a.056.056,0,0,0-.053,0l-.141.086a.017.017,0,0,0,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-188.531 -34.419)"
            fill="#002e8a"
          />
          <Path
            id="Path_67548"
            data-name="Path 67548"
            d="M200.646,48.405l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-189.195 -34.799)"
            fill="#002e8a"
          />
          <Path
            id="Path_67549"
            data-name="Path 67549"
            d="M201.567,48.933l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.01.015-.024,0-.032"
            transform="translate(-189.858 -35.179)"
            fill="#002e8a"
          />
          <Path
            id="Path_67550"
            data-name="Path 67550"
            d="M202.491,49.461l-.18-.1a.058.058,0,0,0-.053,0l-.141.086a.017.017,0,0,0,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-190.524 -35.56)"
            fill="#002e8a"
          />
          <Path
            id="Path_67551"
            data-name="Path 67551"
            d="M203.412,49.988l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.031l.18.1a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-191.188 -35.94)"
            fill="#002e8a"
          />
          <Path
            id="Path_67552"
            data-name="Path 67552"
            d="M204.334,50.516l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-191.852 -36.32)"
            fill="#002e8a"
          />
          <Path
            id="Path_67553"
            data-name="Path 67553"
            d="M205.254,51.043l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.515 -36.7)"
            fill="#002e8a"
          />
          <Path
            id="Path_67554"
            data-name="Path 67554"
            d="M206.4,51.7l-.393-.225a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.393.225a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-193.189 -37.086)"
            fill="#002e8a"
          />
          <Path
            id="Path_67555"
            data-name="Path 67555"
            d="M192.681,45.09l-.136-.078a.057.057,0,0,0-.053,0l-.357.219c-.015.009-.015.023,0,.031l.136.078a.058.058,0,0,0,.053,0l.357-.219c.015-.009.015-.023,0-.031"
            transform="translate(-183.332 -32.429)"
            fill="#002e8a"
          />
          <Path
            id="Path_67556"
            data-name="Path 67556"
            d="M194.055,45.557l-.2-.117a.058.058,0,0,0-.053,0l-.141.086c-.014.009-.015.023,0,.031l.205.117a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-184.428 -32.736)"
            fill="#002e8a"
          />
          <Path
            id="Path_67557"
            data-name="Path 67557"
            d="M194.968,46.08l-.1-.058a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.1.058a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-185.16 -33.156)"
            fill="#002e8a"
          />
          <Path
            id="Path_67558"
            data-name="Path 67558"
            d="M195.645,46.467l-.106-.061a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.106.061a.055.055,0,0,0,.053,0l.141-.086a.017.017,0,0,0,0-.032"
            transform="translate(-185.644 -33.433)"
            fill="#002e8a"
          />
          <Path
            id="Path_67559"
            data-name="Path 67559"
            d="M196.505,46.959l-.3-.169a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.295.169a.056.056,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-186.129 -33.71)"
            fill="#002e8a"
          />
          <Path
            id="Path_67560"
            data-name="Path 67560"
            d="M197.723,47.657l-.18-.1a.057.057,0,0,0-.053,0l-.14.086c-.015.009-.015.023,0,.031l.18.1a.06.06,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-187.089 -34.26)"
            fill="#002e8a"
          />
          <Path
            id="Path_67561"
            data-name="Path 67561"
            d="M198.644,48.184l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.056.056,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-187.753 -34.639)"
            fill="#002e8a"
          />
          <Path
            id="Path_67562"
            data-name="Path 67562"
            d="M199.566,48.711l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.06.06,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-188.417 -35.019)"
            fill="#002e8a"
          />
          <Path
            id="Path_67563"
            data-name="Path 67563"
            d="M200.486,49.238l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.01-.015.023,0,.031l.18.1a.058.058,0,0,0,.053,0l.141-.087c.015-.009.015-.023,0-.031"
            transform="translate(-189.08 -35.399)"
            fill="#002e8a"
          />
          <Path
            id="Path_67564"
            data-name="Path 67564"
            d="M201.41,49.766l-.18-.1a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.056.056,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-189.745 -35.779)"
            fill="#002e8a"
          />
          <Path
            id="Path_67565"
            data-name="Path 67565"
            d="M202.332,50.294l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-190.41 -36.16)"
            fill="#002e8a"
          />
          <Path
            id="Path_67566"
            data-name="Path 67566"
            d="M203.253,50.821l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.056.056,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-191.074 -36.54)"
            fill="#002e8a"
          />
          <Path
            id="Path_67567"
            data-name="Path 67567"
            d="M204.175,51.348l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.014.009-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-191.738 -36.919)"
            fill="#002e8a"
          />
          <Path
            id="Path_67568"
            data-name="Path 67568"
            d="M205.1,51.876l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.401 -37.3)"
            fill="#002e8a"
          />
          <Path
            id="Path_67569"
            data-name="Path 67569"
            d="M206.016,52.4l-.18-.1a.056.056,0,0,0-.053,0l-.141.086a.017.017,0,0,0,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.01.015-.023,0-.031"
            transform="translate(-193.064 -37.679)"
            fill="#002e8a"
          />
          <Path
            id="Path_67570"
            data-name="Path 67570"
            d="M193.557,46.187l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.059.059,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-184.087 -33.201)"
            fill="#002e8a"
          />
          <Path
            id="Path_67571"
            data-name="Path 67571"
            d="M194.477,46.716l-.18-.1a.06.06,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.032"
            transform="translate(-184.75 -33.582)"
            fill="#002e8a"
          />
          <Path
            id="Path_67572"
            data-name="Path 67572"
            d="M195.408,47.247l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.024,0,.032l.18.1a.059.059,0,0,0,.053,0l.141-.086a.017.017,0,0,0,0-.031"
            transform="translate(-185.421 -33.965)"
            fill="#002e8a"
          />
          <Path
            id="Path_67573"
            data-name="Path 67573"
            d="M196.329,47.775l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-186.084 -34.345)"
            fill="#002e8a"
          />
          <Path
            id="Path_67574"
            data-name="Path 67574"
            d="M198.281,48.892l-1.21-.693a.055.055,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l1.21.693a.058.058,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-186.749 -34.724)"
            fill="#002e8a"
          />
          <Path
            id="Path_67575"
            data-name="Path 67575"
            d="M201.859,50.939l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.031l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.01.015-.023,0-.031"
            transform="translate(-190.069 -36.624)"
            fill="#002e8a"
          />
          <Path
            id="Path_67576"
            data-name="Path 67576"
            d="M202.78,51.467l-.18-.1a.057.057,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.059.059,0,0,0,.053,0l.141-.086c.014-.009.015-.023,0-.031"
            transform="translate(-190.733 -37.005)"
            fill="#002e8a"
          />
          <Path
            id="Path_67577"
            data-name="Path 67577"
            d="M203.7,51.993l-.18-.1a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.014-.009.015-.023,0-.031"
            transform="translate(-191.396 -37.384)"
            fill="#002e8a"
          />
          <Path
            id="Path_67578"
            data-name="Path 67578"
            d="M204.623,52.521l-.18-.1a.056.056,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.18.1a.057.057,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.06 -37.765)"
            fill="#002e8a"
          />
          <Path
            id="Path_67579"
            data-name="Path 67579"
            d="M205.5,53.025l-.139-.08a.058.058,0,0,0-.053,0l-.141.086c-.015.009-.015.023,0,.032l.139.08a.055.055,0,0,0,.053,0l.141-.086c.015-.009.015-.023,0-.031"
            transform="translate(-192.724 -38.144)"
            fill="#002e8a"
          />
        </G>
      </G>
      <G
        id="Group_61294"
        data-name="Group 61294"
        transform="translate(53.06 9.438)"
      >
        <G
          id="Group_61293"
          data-name="Group 61293"
          clipPath="url(#clip-path-26)"
        >
          <Rect
            id="Rectangle_8426"
            data-name="Rectangle 8426"
            width={4.561}
            height={6.086}
            transform="translate(-0.148 0.004) rotate(-1.407)"
            fill="url(#linear-gradient-16)"
          />
        </G>
      </G>
      <G
        id="Group_61296"
        data-name="Group 61296"
        transform="translate(53.06 10.764)"
      >
        <G
          id="Group_61295"
          data-name="Group 61295"
          clipPath="url(#clip-path-27)"
        >
          <Rect
            id="Rectangle_8427"
            data-name="Rectangle 8427"
            width={4.483}
            height={4.759}
            transform="translate(-0.115 0.003) rotate(-1.407)"
            fill="url(#linear-gradient-17)"
          />
        </G>
      </G>
      <G id="Group_61298" data-name="Group 61298" transform="translate(44.901)">
        <G
          id="Group_61297"
          data-name="Group 61297"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67582"
            data-name="Path 67582"
            d="M194.557,36.145l0-.013v-.006l-.005-.016,0-.01h0l0-.009-.009-.017h0l-.012-.018,0,0,0,0,0,0-.013-.015,0,0,0,0-.009-.008-.006-.006a.13.13,0,0,0-.02-.013l-4.148-2.358-.02-.009-.026-.005h-.019l-.006,0-.006,0h0l-.07.042a.045.045,0,0,1,.016-.006h.02l.017,0a.144.144,0,0,1,.024.011l4.148,2.357.02.014.006.006.013.013,0,0,.016.019v0a.255.255,0,0,1,.015.023h0a.2.2,0,0,1,.013.025h0l.009.026v0a.218.218,0,0,1,.005.024v0a.2.2,0,0,1,0,.025l-.052,3.321a.082.082,0,0,1-.032.072l.07-.041a.083.083,0,0,0,.032-.072l.052-3.321c0-.007,0-.024,0-.024s0-.01,0-.013"
            transform="translate(-181.917 -24.226)"
            fill="#fff"
          />
          <Path
            id="Path_67583"
            data-name="Path 67583"
            d="M208.211,53.038a1.508,1.508,0,0,1-.509-.121,1.078,1.078,0,0,0-.479-.158c-.269.032-.524-.161-.521.009,0,.134.2.176.29.2.037.011.134.022.083.072-.14.137-1.016.156-1.058.243s.064.1.1.117c.264.084.235.381.545.409a3.371,3.371,0,0,0,.874-.132,4.438,4.438,0,0,1,.673.008,2.659,2.659,0,0,0,0-.65"
            transform="translate(-193.334 -37.969)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67584"
            data-name="Path 67584"
            d="M207.024,54.385c-.291.046-.322-.271-.584-.326-.036-.008-.14-.016-.115-.1s.84-.169.946-.3c.034-.043-.033-.05-.074-.056a.853.853,0,0,1-.175.03c.042.01.094.025.054.065-.14.137-1.016.156-1.058.242s.064.105.1.117c.264.084.236.381.546.409a3.373,3.373,0,0,0,.874-.132,4.434,4.434,0,0,1,.673.008s.007-.081.013-.185c-.154.006-.452-.288-.519-.288-.234,0,0,.408-.68.517"
            transform="translate(-193.335 -38.622)"
            fill="#f39392"
          />
        </G>
      </G>
      <G
        id="Group_61300"
        data-name="Group 61300"
        transform="translate(61.59 10.931)"
      >
        <G
          id="Group_61299"
          data-name="Group 61299"
          clipPath="url(#clip-path-29)"
        >
          <Rect
            id="Rectangle_8429"
            data-name="Rectangle 8429"
            width={4.625}
            height={4.508}
            transform="matrix(0.687, -0.726, 0.726, 0.687, -2.367, 2.494)"
            fill="url(#linear-gradient-18)"
          />
        </G>
      </G>
      <G
        id="Group_61302"
        data-name="Group 61302"
        transform="translate(59.272 14.325)"
      >
        <G
          id="Group_61301"
          data-name="Group 61301"
          clipPath="url(#clip-path-30)"
        >
          <Rect
            id="Rectangle_8430"
            data-name="Rectangle 8430"
            width={4.359}
            height={4.394}
            transform="matrix(0.701, -0.714, 0.714, 0.701, -1.11, 0.884)"
            fill="url(#linear-gradient-19)"
          />
        </G>
      </G>
      <G id="Group_61304" data-name="Group 61304" transform="translate(44.901)">
        <G
          id="Group_61303"
          data-name="Group 61303"
          clipPath="url(#clip-path-6)"
        >
          <Path
            id="Path_67587"
            data-name="Path 67587"
            d="M215.152,32.08s-1.094.595-1.094.865a.773.773,0,0,0,.291.5c.4,0,.789-.431.932-.608a.165.165,0,0,0,.025-.16,2.57,2.57,0,0,1-.155-.6"
            transform="translate(-199.136 -23.115)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67588"
            data-name="Path 67588"
            d="M215.152,32.08s-1.094.595-1.094.865a.428.428,0,0,0,.025.139.845.845,0,0,1,.265-.041.749.749,0,0,1,.525.193,2.375,2.375,0,0,0,.408-.4.165.165,0,0,0,.025-.16,2.566,2.566,0,0,1-.155-.6"
            transform="translate(-199.136 -23.115)"
            fill="#f39392"
          />
          <Path
            id="Path_67589"
            data-name="Path 67589"
            d="M213.824,26.152s.371-1.394-.892-1.447-1.124,1.374-1.062,1.514-.031.119-.027.366a3.335,3.335,0,0,0,.311.9.286.286,0,0,0,.37.155,1.591,1.591,0,0,0,1.028-.751c.126.028.193-.136.22-.226s.039-.108.092-.287-.04-.222-.04-.222"
            transform="translate(-197.532 -17.799)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67590"
            data-name="Path 67590"
            d="M214.759,26.218s.327-1.228-.678-1.423a.752.752,0,0,1,.177.511,2.216,2.216,0,0,1-.167.976,1.047,1.047,0,0,1-.215,1.141,1.118,1.118,0,0,1-.57.226.621.621,0,0,1-.175-.022.318.318,0,0,0,.329.077,1.589,1.589,0,0,0,1.027-.751c.127.028.193-.136.22-.226s.039-.107.092-.287-.04-.223-.04-.223"
            transform="translate(-198.467 -17.866)"
            fill="#f39392"
          />
        </G>
      </G>
      <G
        id="Group_61306"
        data-name="Group 61306"
        transform="translate(59.143 6.81)"
      >
        <G
          id="Group_61305"
          data-name="Group 61305"
          clipPath="url(#clip-path-32)"
        >
          <Rect
            id="Rectangle_8432"
            data-name="Rectangle 8432"
            width={2.097}
            height={2.789}
            transform="translate(-0.241 2.054) rotate(-89.12)"
            fill="url(#linear-gradient-20)"
          />
        </G>
      </G>
      <G
        id="Group_61308"
        data-name="Group 61308"
        transform="translate(64.017 12.135)"
      >
        <G
          id="Group_61307"
          data-name="Group 61307"
          clipPath="url(#clip-path-33)"
        >
          <Path
            id="Path_67592"
            data-name="Path 67592"
            d="M249.156,75.431a21.238,21.238,0,0,0-.964,3.031,3.9,3.9,0,0,0-.445,1.107c.07.042.008.179.049.267s.227.214.307.329.124-.118.049-.3.082-.492.172-.657-.119.3.118.389c.064.025.005-.167.111-.385.2-.4-.051-.47.261-.965a9.351,9.351,0,0,0,1.25-2.346c.181-.759-.585-1.071-.907-.47"
            transform="translate(-242.519 -66.258)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67593"
            data-name="Path 67593"
            d="M252.5,64.612c-.33.094-.467.234-.468,1.352a12.739,12.739,0,0,0,.223,2.395c.141.723.886.97,1.025.006.051-.355.05-1.351.051-2.141s-.064-1.831-.831-1.613"
            transform="translate(-245.617 -58.669)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_61310"
        data-name="Group 61310"
        transform="translate(70.436 18.049)"
      >
        <G
          id="Group_61309"
          data-name="Group 61309"
          clipPath="url(#clip-path-34)"
        >
          <Rect
            id="Rectangle_8434"
            data-name="Rectangle 8434"
            width={1.683}
            height={3.064}
            transform="matrix(0.991, -0.135, 0.135, 0.991, -0.391, 0.053)"
            fill="url(#linear-gradient-21)"
          />
        </G>
      </G>
      <G
        id="Group_61312"
        data-name="Group 61312"
        transform="translate(69.448 22.28)"
      >
        <G
          id="Group_61311"
          data-name="Group 61311"
          clipPath="url(#clip-path-35)"
        >
          <Rect
            id="Rectangle_8435"
            data-name="Rectangle 8435"
            width={6.736}
            height={4.699}
            transform="translate(-0.523 6.398) rotate(-85.665)"
            fill="url(#linear-gradient-22)"
          />
        </G>
      </G>
      <G
        id="Group_61314"
        data-name="Group 61314"
        transform="translate(64.017 12.135)"
      >
        <G
          id="Group_61313"
          data-name="Group 61313"
          clipPath="url(#clip-path-33)"
        >
          <Path
            id="Path_67596"
            data-name="Path 67596"
            d="M248.7,98.474c.013.6.8,4.745.8,4.888,0,.17.715.353.7-.218a41.613,41.613,0,0,0,.168-4.977c-.023-.414-1.7-1.026-1.67.307"
            transform="translate(-243.214 -82.502)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_61316"
        data-name="Group 61316"
        transform="translate(69.46 27.132)"
      >
        <G
          id="Group_61315"
          data-name="Group 61315"
          clipPath="url(#clip-path-37)"
        >
          <Rect
            id="Rectangle_8437"
            data-name="Rectangle 8437"
            width={1.996}
            height={2.784}
            transform="translate(-0.069 0.001) rotate(-1.196)"
            fill="url(#linear-gradient-23)"
          />
        </G>
      </G>
      <G
        id="Group_61318"
        data-name="Group 61318"
        transform="translate(64.017 12.135)"
      >
        <G
          id="Group_61317"
          data-name="Group 61317"
          clipPath="url(#clip-path-33)"
        >
          <Path
            id="Path_67598"
            data-name="Path 67598"
            d="M249.306,119.993a1.329,1.329,0,0,1-1.08.649,5.851,5.851,0,0,1-.829-.031c-.041.039-.065.06-.065.06s-.156.223.368.277c.888.092,1.154-.105,1.244-.274a1.307,1.307,0,0,1,.279-.4l-.007.268s.288-.119.288-.332-.019-.527-.019-.527-.151.25-.18.311"
            transform="translate(-242.212 -98.37)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61320"
        data-name="Group 61320"
        transform="translate(69.135 32.473)"
      >
        <G
          id="Group_61319"
          data-name="Group 61319"
          clipPath="url(#clip-path-39)"
        >
          <Rect
            id="Rectangle_8439"
            data-name="Rectangle 8439"
            width={2.668}
            height={2.237}
            transform="translate(-0.511)"
            fill="url(#linear-gradient-24)"
          />
        </G>
      </G>
      <G
        id="Group_61322"
        data-name="Group 61322"
        transform="translate(71.72 22.621)"
      >
        <G
          id="Group_61321"
          data-name="Group 61321"
          clipPath="url(#clip-path-40)"
        >
          <Rect
            id="Rectangle_8440"
            data-name="Rectangle 8440"
            width={3.751}
            height={8.212}
            transform="matrix(0.999, -0.047, 0.047, 0.999, -0.516, 0.018)"
            fill="url(#linear-gradient-25)"
          />
        </G>
      </G>
      <G
        id="Group_61324"
        data-name="Group 61324"
        transform="translate(64.017 12.135)"
      >
        <G
          id="Group_61323"
          data-name="Group 61323"
          clipPath="url(#clip-path-33)"
        >
          <Path
            id="Path_67601"
            data-name="Path 67601"
            d="M259.473,103.914a12.3,12.3,0,0,0,.7,1.776c.509,1.331.887,2.415.916,2.555.035.166.768.216.651-.343s-.288-3.325-.63-4.416c-.124-.4-1.906-.878-1.634.428"
            transform="translate(-250.955 -86.394)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_61326"
        data-name="Group 61326"
        transform="translate(72.234 27.997)"
      >
        <G
          id="Group_61325"
          data-name="Group 61325"
          clipPath="url(#clip-path-42)"
        >
          <Rect
            id="Rectangle_8442"
            data-name="Rectangle 8442"
            width={2.862}
            height={3.275}
            transform="matrix(0.979, -0.204, 0.204, 0.979, -0.67, 0.119)"
            fill="url(#linear-gradient-26)"
          />
        </G>
      </G>
      <G
        id="Group_61328"
        data-name="Group 61328"
        transform="translate(64.017 12.135)"
      >
        <G
          id="Group_61327"
          data-name="Group 61327"
          clipPath="url(#clip-path-33)"
        >
          <Path
            id="Path_67603"
            data-name="Path 67603"
            d="M265,122.054a1.33,1.33,0,0,1-.794.978,5.883,5.883,0,0,1-.79.253c-.025.05-.041.079-.041.079s-.071.262.44.135c.866-.216,1.049-.492,1.077-.681a1.312,1.312,0,0,1,.126-.472l.085.254s.23-.21.158-.41-.2-.489-.2-.489-.057.287-.063.354"
            transform="translate(-253.782 -99.824)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61330"
        data-name="Group 61330"
        transform="translate(73.609 33.174)"
      >
        <G
          id="Group_61329"
          data-name="Group 61329"
          clipPath="url(#clip-path-44)"
        >
          <Rect
            id="Rectangle_8444"
            data-name="Rectangle 8444"
            width={3.061}
            height={3.315}
            transform="matrix(0.94, -0.341, 0.341, 0.94, -1.341, 0.313)"
            fill="url(#linear-gradient-27)"
          />
        </G>
      </G>
      <G
        id="Group_61332"
        data-name="Group 61332"
        transform="translate(71.843 14.623)"
      >
        <G
          id="Group_61331"
          data-name="Group 61331"
          clipPath="url(#clip-path-45)"
        >
          <Rect
            id="Rectangle_8445"
            data-name="Rectangle 8445"
            width={3.359}
            height={5.935}
            transform="translate(-0.295 0.015) rotate(-2.923)"
            fill="url(#linear-gradient-28)"
          />
        </G>
      </G>
      <G
        id="Group_61334"
        data-name="Group 61334"
        transform="translate(70.174 17.864)"
      >
        <G
          id="Group_61333"
          data-name="Group 61333"
          clipPath="url(#clip-path-46)"
        >
          <Rect
            id="Rectangle_8446"
            data-name="Rectangle 8446"
            width={5.021}
            height={7.733}
            transform="translate(-0.556 0.02) rotate(-2.923)"
            fill="url(#linear-gradient-29)"
          />
        </G>
      </G>
      <G
        id="Group_61336"
        data-name="Group 61336"
        transform="translate(64.017 12.135)"
      >
        <G
          id="Group_61335"
          data-name="Group 61335"
          clipPath="url(#clip-path-33)"
        >
          <Path
            id="Path_67607"
            data-name="Path 67607"
            d="M255.35,59.958s-.768-.006-.74.535c.021.409-.048.488-.214.643-.054.05-.159.111-.229.182a1.829,1.829,0,0,0-.248.472l.191.358a2.583,2.583,0,0,0,.977-.517,1.569,1.569,0,0,1,.729-.321c-.538-.165-.466-1.35-.466-1.35"
            transform="translate(-246.974 -55.337)"
            fill="#f39392"
          />
          <Path
            id="Path_67608"
            data-name="Path 67608"
            d="M262.212,77.409a10.384,10.384,0,0,0-.325,2.6c-.067.55-.239.284-.3.726-.034.239-.19.366-.123.381.248.057.333-.444.316-.257a.686.686,0,0,1-.214.526c-.163.11-.257.327-.127.277s.345.063.428.013.108-.2.189-.195.12-.072.169-.468a20.523,20.523,0,0,0,.922-3.457c0-.54-.624-.865-.935-.149"
            transform="translate(-252.348 -67.613)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67609"
            data-name="Path 67609"
            d="M260.735,66.811c-.394-1.046-.685-1.1-1.023-1.038-.786.135-.371,1.162-.036,1.835a13.447,13.447,0,0,0,.907,1.549c.508.715,1.142.628.957-.084a23.367,23.367,0,0,0-.805-2.261"
            transform="translate(-250.824 -59.515)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_61338"
        data-name="Group 61338"
        transform="translate(72.456 18.377)"
      >
        <G
          id="Group_61337"
          data-name="Group 61337"
          clipPath="url(#clip-path-48)"
        >
          <Rect
            id="Rectangle_8448"
            data-name="Rectangle 8448"
            width={2.584}
            height={2.822}
            transform="translate(-0.751 0.071) rotate(-9.729)"
            fill="url(#linear-gradient-30)"
          />
        </G>
      </G>
      <G
        id="Group_61340"
        data-name="Group 61340"
        transform="translate(70.577 14.892)"
      >
        <G
          id="Group_61339"
          data-name="Group 61339"
          clipPath="url(#clip-path-49)"
        >
          <Rect
            id="Rectangle_8449"
            data-name="Rectangle 8449"
            width={2.46}
            height={2.723}
            transform="translate(-0.158 0.007) rotate(-2.923)"
            fill="url(#linear-gradient-31)"
          />
        </G>
      </G>
      <G
        id="Group_61342"
        data-name="Group 61342"
        transform="translate(64.017 12.135)"
      >
        <G
          id="Group_61341"
          data-name="Group 61341"
          clipPath="url(#clip-path-33)"
        >
          <Path
            id="Path_67612"
            data-name="Path 67612"
            d="M254.3,56.327a.883.883,0,0,0-.351-.64c-.3-.23-1.266-.222-1.24.284.005.1.034.227.043.4s-.051.168,0,.368.39.727.44.854.559.066.848-.2.351-.423.334-.546.231.085.207-.378-.283-.148-.283-.148"
            transform="translate(-246.101 -52.155)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67613"
            data-name="Path 67613"
            d="M255.863,56.829a.882.882,0,0,0-.291-.591,1.365,1.365,0,0,1,.109.2,1.3,1.3,0,0,1,.091.871,1.092,1.092,0,0,1-.66.8.852.852,0,0,1-.234.042,1.062,1.062,0,0,0,.727-.258c.289-.263.351-.423.334-.546s.231.085.207-.378-.283-.148-.283-.148"
            transform="translate(-247.665 -52.656)"
            fill="#f39392"
          />
        </G>
      </G>
      <G
        id="Group_61344"
        data-name="Group 61344"
        transform="translate(28.511 3.55)"
      >
        <G
          id="Group_61343"
          data-name="Group 61343"
          clipPath="url(#clip-path-51)"
        >
          <Path
            id="Path_67614"
            data-name="Path 67614"
            d="M130.567,51.988a1.28,1.28,0,0,1,.4.2.919.919,0,0,0,.367.224c.23.026.4.235.435.094.024-.112-.129-.184-.2-.226-.028-.016-.106-.044-.055-.076.143-.087.873.067.926,0s-.033-.1-.061-.116c-.2-.121-.122-.362-.374-.445a2.874,2.874,0,0,0-.751-.06,3.76,3.76,0,0,1-.557-.137,2.262,2.262,0,0,0-.127.539"
            transform="translate(-122.584 -40.621)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67615"
            data-name="Path 67615"
            d="M131.91,51.641c.25.018.215.287.422.383.029.014.113.041.077.1s-.731-.022-.844.07c-.036.029.018.048.051.061a.7.7,0,0,1,.151.009c-.033-.017-.074-.039-.033-.064.143-.086.873.067.926,0s-.033-.1-.061-.117c-.2-.121-.122-.362-.374-.445a2.861,2.861,0,0,0-.751-.06,3.808,3.808,0,0,1-.557-.137s-.021.066-.047.151c.129.025.32.327.376.339.195.044.076-.34.665-.3"
            transform="translate(-122.807 -40.621)"
            fill="#f39392"
          />
        </G>
      </G>
      <G
        id="Group_61346"
        data-name="Group 61346"
        transform="translate(34.145 12.277)"
      >
        <G
          id="Group_61345"
          data-name="Group 61345"
          clipPath="url(#clip-path-52)"
        >
          <Rect
            id="Rectangle_8452"
            data-name="Rectangle 8452"
            width={4.299}
            height={4.288}
            transform="translate(-1.684 1.348) rotate(-42.466)"
            fill="url(#linear-gradient-32)"
          />
        </G>
      </G>
      <G
        id="Group_61348"
        data-name="Group 61348"
        transform="translate(34 10.217)"
      >
        <G
          id="Group_61347"
          data-name="Group 61347"
          clipPath="url(#clip-path-53)"
        >
          <Rect
            id="Rectangle_8453"
            data-name="Rectangle 8453"
            width={4.283}
            height={4.381}
            transform="translate(-0.842 3.398) rotate(-77.466)"
            fill="url(#linear-gradient-33)"
          />
        </G>
      </G>
      <G
        id="Group_61350"
        data-name="Group 61350"
        transform="translate(35.516 14.544)"
      >
        <G
          id="Group_61349"
          data-name="Group 61349"
          clipPath="url(#clip-path-54)"
        >
          <Rect
            id="Rectangle_8454"
            data-name="Rectangle 8454"
            width={7.771}
            height={3.431}
            transform="translate(-0.523 7.621) rotate(-87.355)"
            fill="url(#linear-gradient-34)"
          />
        </G>
      </G>
      <G
        id="Group_61352"
        data-name="Group 61352"
        transform="translate(34.897 25.194)"
      >
        <G
          id="Group_61351"
          data-name="Group 61351"
          clipPath="url(#clip-path-55)"
        >
          <Rect
            id="Rectangle_8455"
            data-name="Rectangle 8455"
            width={1.991}
            height={2.707}
            transform="matrix(0.041, -0.999, 0.999, 0.041, -0.196, 1.882)"
            fill="url(#linear-gradient-35)"
          />
        </G>
      </G>
      <G
        id="Group_61354"
        data-name="Group 61354"
        transform="translate(34.024 15.397)"
      >
        <G
          id="Group_61353"
          data-name="Group 61353"
          clipPath="url(#clip-path-56)"
        >
          <Rect
            id="Rectangle_8456"
            data-name="Rectangle 8456"
            width={2.77}
            height={7.235}
            transform="translate(-0.141 0) rotate(-0.215)"
            fill="url(#linear-gradient-36)"
          />
        </G>
      </G>
      <G
        id="Group_61356"
        data-name="Group 61356"
        transform="translate(34.704 21.021)"
      >
        <G
          id="Group_61355"
          data-name="Group 61355"
          clipPath="url(#clip-path-57)"
        >
          <Rect
            id="Rectangle_8457"
            data-name="Rectangle 8457"
            width={5.046}
            height={2.103}
            transform="translate(-0.265 4.976) rotate(-88.011)"
            fill="url(#linear-gradient-37)"
          />
        </G>
      </G>
      <G
        id="Group_61358"
        data-name="Group 61358"
        transform="translate(33.412 24.613)"
      >
        <G
          id="Group_61357"
          data-name="Group 61357"
          clipPath="url(#clip-path-58)"
        >
          <Rect
            id="Rectangle_8458"
            data-name="Rectangle 8458"
            width={3.378}
            height={3.372}
            transform="matrix(0.749, -0.663, 0.663, 0.749, -1.486, 1.033)"
            fill="url(#linear-gradient-38)"
          />
        </G>
      </G>
      <G
        id="Group_61360"
        data-name="Group 61360"
        transform="translate(33.817 20.489)"
      >
        <G
          id="Group_61359"
          data-name="Group 61359"
          clipPath="url(#clip-path-59)"
        >
          <Rect
            id="Rectangle_8459"
            data-name="Rectangle 8459"
            width={5.517}
            height={4.787}
            transform="translate(-0.811 4.775) rotate(-80.36)"
            fill="url(#linear-gradient-39)"
          />
        </G>
      </G>
      <G
        id="Group_61362"
        data-name="Group 61362"
        transform="translate(28.511 3.55)"
      >
        <G
          id="Group_61361"
          data-name="Group 61361"
          clipPath="url(#clip-path-51)"
        >
          <Path
            id="Path_67624"
            data-name="Path 67624"
            d="M126.331,34a1.982,1.982,0,0,0-1.188-.252c-.616.1-.6.2-.551.292s.044.34.247.342a10.069,10.069,0,0,0,1.611,0c.127-.084-.119-.385-.119-.385"
            transform="translate(-118.267 -27.852)"
            fill="#002e8a"
          />
          <Path
            id="Path_67625"
            data-name="Path 67625"
            d="M122.369,35.233a1.8,1.8,0,0,0-1.241.824c-.478.752.224,5.461.16,5.974a9.457,9.457,0,0,0,3.611-1.012s-.4-4.106-.381-4.445c.02-.3-.192-1.4-.921-1.45a3.675,3.675,0,0,0-1.229.109"
            transform="translate(-115.667 -28.851)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61364"
        data-name="Group 61364"
        transform="translate(35.395 9.814)"
      >
        <G
          id="Group_61363"
          data-name="Group 61363"
          clipPath="url(#clip-path-61)"
        >
          <Rect
            id="Rectangle_8461"
            data-name="Rectangle 8461"
            width={3.166}
            height={6.71}
            transform="translate(-0.83 0.108) rotate(-7.443)"
            fill="url(#linear-gradient-40)"
          />
        </G>
      </G>
      <G
        id="Group_61366"
        data-name="Group 61366"
        transform="translate(36.554 9.694)"
      >
        <G
          id="Group_61365"
          data-name="Group 61365"
          clipPath="url(#clip-path-62)"
        >
          <Rect
            id="Rectangle_8462"
            data-name="Rectangle 8462"
            width={2.922}
            height={7.989}
            transform="translate(-0.948 0.116) rotate(-6.99)"
            fill="url(#linear-gradient-41)"
          />
        </G>
      </G>
      <G
        id="Group_61368"
        data-name="Group 61368"
        transform="translate(33.661 9.392)"
      >
        <G
          id="Group_61367"
          data-name="Group 61367"
          clipPath="url(#clip-path-63)"
        >
          <Rect
            id="Rectangle_8463"
            data-name="Rectangle 8463"
            width={9.097}
            height={2.974}
            transform="translate(-0.335 9.018) rotate(-88.421)"
            fill="url(#linear-gradient-42)"
          />
        </G>
      </G>
      <G
        id="Group_61370"
        data-name="Group 61370"
        transform="translate(28.511 3.55)"
      >
        <G
          id="Group_61369"
          data-name="Group 61369"
          clipPath="url(#clip-path-51)"
        >
          <Path
            id="Path_67629"
            data-name="Path 67629"
            d="M127.1,32.875s-.132.42-.427.445a1.045,1.045,0,0,1-.881-.313,1.066,1.066,0,0,0,.312-.85c-.1-.443,1.032.188,1,.718"
            transform="translate(-119.149 -26.613)"
            fill="#f39392"
          />
          <Path
            id="Path_67630"
            data-name="Path 67630"
            d="M121.762,57.43s.242.058.454.135.248.142.371.146c.037,0-.023.167-.3.072s.377.187.448.373.128.288.015.263-.091-.239-.237-.293c0,0,.239.289.155.487-.02.046-.327.11-.415-.061a.4.4,0,0,0-.263-.217,5.653,5.653,0,0,1-.515-.283Z"
            transform="translate(-116.037 -44.93)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67631"
            data-name="Path 67631"
            d="M115.451,48.39c.49.876,1.411,2.367,1.411,2.367s-.056.414-.646.572a15.205,15.205,0,0,1-1.845-2.351c-.437-.858.786-1.114,1.08-.589"
            transform="translate(-110.852 -38.221)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61372"
        data-name="Group 61372"
        transform="translate(32.663 13.453)"
      >
        <G
          id="Group_61371"
          data-name="Group 61371"
          clipPath="url(#clip-path-65)"
        >
          <Rect
            id="Rectangle_8465"
            data-name="Rectangle 8465"
            width={2.27}
            height={2.992}
            transform="translate(-0.43 0.069) rotate(-9.175)"
            fill="url(#linear-gradient-43)"
          />
        </G>
      </G>
      <G
        id="Group_61374"
        data-name="Group 61374"
        transform="translate(28.511 3.55)"
      >
        <G
          id="Group_61373"
          data-name="Group 61373"
          clipPath="url(#clip-path-51)"
        >
          <Path
            id="Path_67633"
            data-name="Path 67633"
            d="M116.616,37.582c-1.082-.037-2.538,2.889-2.268,3.8.086.29.575.538,1.162-.245s1.651-2.5,1.732-2.631c.384-.622-.294-.913-.625-.924"
            transform="translate(-110.879 -30.629)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61376"
        data-name="Group 61376"
        transform="translate(33.021 10.519)"
      >
        <G
          id="Group_61375"
          data-name="Group 61375"
          clipPath="url(#clip-path-67)"
        >
          <Rect
            id="Rectangle_8467"
            data-name="Rectangle 8467"
            width={4.164}
            height={4.126}
            transform="translate(-1.843 1.91) rotate(-46.02)"
            fill="url(#linear-gradient-44)"
          />
        </G>
      </G>
      <G
        id="Group_61378"
        data-name="Group 61378"
        transform="translate(28.511 3.55)"
      >
        <G
          id="Group_61377"
          data-name="Group 61377"
          clipPath="url(#clip-path-51)"
        >
          <Path
            id="Path_67635"
            data-name="Path 67635"
            d="M127.65,27.458a1.154,1.154,0,0,1,.115.463,1.377,1.377,0,0,0-.064.484.889.889,0,0,1-.468.827c-.321.164-.811-.29-.974-.611a1.5,1.5,0,0,1-.162-.931.855.855,0,0,1,1.553-.232"
            transform="translate(-119.36 -23.048)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_61380"
        data-name="Group 61380"
        transform="translate(35.33 7.074)"
      >
        <G
          id="Group_61379"
          data-name="Group 61379"
          clipPath="url(#clip-path-69)"
        >
          <Rect
            id="Rectangle_8469"
            data-name="Rectangle 8469"
            width={2.134}
            height={1.467}
            transform="translate(-0.02 0) rotate(-0.796)"
            fill="url(#linear-gradient-45)"
          />
        </G>
      </G>
      <G
        id="Group_61382"
        data-name="Group 61382"
        transform="translate(34.924 7.436)"
      >
        <G
          id="Group_61381"
          data-name="Group 61381"
          clipPath="url(#clip-path-70)"
        >
          <Rect
            id="Rectangle_8470"
            data-name="Rectangle 8470"
            width={1.834}
            height={1.651}
            transform="translate(-0.614 1.146) rotate(-63.676)"
            fill="url(#linear-gradient-46)"
          />
        </G>
      </G>
      <G
        id="Group_61384"
        data-name="Group 61384"
        transform="translate(28.511 3.55)"
      >
        <G
          id="Group_61383"
          data-name="Group 61383"
          clipPath="url(#clip-path-51)"
        >
          <Path
            id="Path_67638"
            data-name="Path 67638"
            d="M126.2,31.009a.235.235,0,0,0-.2-.1c-.139,0-.165.071-.133.293a.452.452,0,0,0,.214.314c.038.046.125.055.172-.15a.488.488,0,0,0-.051-.354"
            transform="translate(-119.193 -25.82)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_61386"
        data-name="Group 61386"
        transform="translate(18.269 22.265)"
      >
        <G
          id="Group_61385"
          data-name="Group 61385"
          clipPath="url(#clip-path-72)"
        >
          <Rect
            id="Rectangle_8472"
            data-name="Rectangle 8472"
            width={58.663}
            height={37.971}
            transform="translate(0 0)"
            fill="url(#linear-gradient-47)"
          />
        </G>
      </G>
      <G
        id="Group_61388"
        data-name="Group 61388"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61387"
          data-name="Group 61387"
          clipPath="url(#clip-path-73)"
        >
          <Path
            id="Path_67640"
            data-name="Path 67640"
            d="M242.28,72.732V83l-2.78,1.9V74.63Z"
            transform="translate(-186.234 -62.306)"
            fill="#9d9dc2"
          />
          <Path
            id="Path_67641"
            data-name="Path 67641"
            d="M87.933,77.886V88.157l-3.544-1.965V75.921Z"
            transform="translate(-74.471 -64.604)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61390"
        data-name="Group 61390"
        transform="translate(71.251 32.551)"
      >
        <G
          id="Group_61389"
          data-name="Group 61389"
          clipPath="url(#clip-path-74)"
        >
          <Rect
            id="Rectangle_8474"
            data-name="Rectangle 8474"
            width={3.795}
            height={10.281}
            transform="translate(0 0)"
            fill="url(#linear-gradient-48)"
          />
        </G>
      </G>
      <G
        id="Group_61392"
        data-name="Group 61392"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61391"
          data-name="Group 61391"
          clipPath="url(#clip-path-73)"
        >
          <Path
            id="Path_67643"
            data-name="Path 67643"
            d="M244.224,119.591a13.833,13.833,0,0,1-2.329,2.758V132.62a11.33,11.33,0,0,0,3.649-5.838V116.511a10.2,10.2,0,0,1-1.32,3.08"
            transform="translate(-187.959 -93.85)"
            fill="#9d9dc2"
          />
          <Path
            id="Path_67644"
            data-name="Path 67644"
            d="M89.46,126.34V136.61a10.4,10.4,0,0,1-3.766-5.2V121.137a10.4,10.4,0,0,0,3.766,5.2"
            transform="translate(-75.412 -97.183)"
            fill="#9d9dc2"
          />
        </G>
      </G>
      <G
        id="Group_61394"
        data-name="Group 61394"
        transform="translate(64.693 39.846)"
      >
        <G
          id="Group_61393"
          data-name="Group 61393"
          clipPath="url(#clip-path-76)"
        >
          <Rect
            id="Rectangle_8476"
            data-name="Rectangle 8476"
            width={6.103}
            height={14.179}
            fill="url(#linear-gradient-49)"
          />
        </G>
      </G>
      <G
        id="Group_61396"
        data-name="Group 61396"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61395"
          data-name="Group 61395"
          clipPath="url(#clip-path-73)"
        >
          <Path
            id="Path_67646"
            data-name="Path 67646"
            d="M224.2,152.324v10.153l-2.827-1.644V150.68Z"
            transform="translate(-173.171 -118.469)"
            fill="#afafdc"
          />
          <Path
            id="Path_67647"
            data-name="Path 67647"
            d="M197.052,150.68v10.167a20.754,20.754,0,0,1-9.432,2.631V153.311a33.592,33.592,0,0,0,9.432-2.632"
            transform="translate(-148.853 -118.47)"
            fill="#9d9dc2"
          />
        </G>
      </G>
      <G
        id="Group_61398"
        data-name="Group 61398"
        transform="translate(52.434 44.742)"
      >
        <G
          id="Group_61397"
          data-name="Group 61397"
          clipPath="url(#clip-path-78)"
        >
          <Rect
            id="Rectangle_8478"
            data-name="Rectangle 8478"
            width={9.432}
            height={10.167}
            transform="translate(0 0)"
            fill="url(#linear-gradient-50)"
          />
        </G>
      </G>
      <G
        id="Group_61400"
        data-name="Group 61400"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61399"
          data-name="Group 61399"
          clipPath="url(#clip-path-73)"
        >
          <Path
            id="Path_67649"
            data-name="Path 67649"
            d="M132.677,155.482v10.271a28.435,28.435,0,0,1-9.79-2.119V153.363a28.435,28.435,0,0,0,9.79,2.119"
            transform="translate(-102.211 -120.403)"
            fill="#9d9dc2"
          />
        </G>
      </G>
      <G
        id="Group_61402"
        data-name="Group 61402"
        transform="translate(34.343 42.86)"
      >
        <G
          id="Group_61401"
          data-name="Group 61401"
          clipPath="url(#clip-path-80)"
        >
          <Rect
            id="Rectangle_8480"
            data-name="Rectangle 8480"
            width={9.79}
            height={12.39}
            fill="url(#linear-gradient-51)"
          />
        </G>
      </G>
      <G
        id="Group_61404"
        data-name="Group 61404"
        transform="translate(44.133 47.3)"
      >
        <G
          id="Group_61403"
          data-name="Group 61403"
          clipPath="url(#clip-path-81)"
        >
          <Rect
            id="Rectangle_8481"
            data-name="Rectangle 8481"
            width={8.376}
            height={10.271}
            fill="url(#linear-gradient-52)"
          />
        </G>
      </G>
      <G
        id="Group_61406"
        data-name="Group 61406"
        transform="translate(20.154 13.838)"
      >
        <G
          id="Group_61405"
          data-name="Group 61405"
          clipPath="url(#clip-path-82)"
        >
          <Rect
            id="Rectangle_8483"
            data-name="Rectangle 8483"
            width={54.892}
            height={33.462}
            transform="translate(0 0)"
            fill="url(#linear-gradient-53)"
          />
        </G>
      </G>
      <G
        id="Group_61408"
        data-name="Group 61408"
        transform="translate(23.584 19.75)"
      >
        <G
          id="Group_61407"
          data-name="Group 61407"
          clipPath="url(#clip-path-83)"
        >
          <Rect
            id="Rectangle_8484"
            data-name="Rectangle 8484"
            width={36.459}
            height={35.621}
            transform="matrix(0.943, -0.334, 0.334, 0.943, -8.664, 3.066)"
            fill="url(#linear-gradient-54)"
          />
        </G>
      </G>
      <G
        id="Group_61410"
        data-name="Group 61410"
        transform="translate(20.154 28.673)"
      >
        <G
          id="Group_61409"
          data-name="Group 61409"
          clipPath="url(#clip-path-84)"
        >
          <Rect
            id="Rectangle_8485"
            data-name="Rectangle 8485"
            width={23.545}
            height={21.499}
            transform="translate(-5.021 1.777) rotate(-19.487)"
            fill="url(#linear-gradient-55)"
          />
        </G>
      </G>
      <G
        id="Group_61422"
        data-name="Group 61422"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61421"
          data-name="Group 61421"
          clipPath="url(#clip-path-73)"
        >
          <G
            id="Group_61415"
            data-name="Group 61415"
            transform="translate(30.34 3.938)"
            opacity={0.55}
          >
            <G id="Group_61414" data-name="Group 61414">
              <G
                id="Group_61413"
                data-name="Group 61413"
                clipPath="url(#clip-path-86)"
              >
                <G id="Group_61412" data-name="Group 61412">
                  <G
                    id="Group_61411"
                    data-name="Group 61411"
                    clipPath="url(#clip-path-87)"
                  >
                    <Rect
                      id="Rectangle_8486"
                      data-name="Rectangle 8486"
                      width={34.665}
                      height={34.677}
                      transform="matrix(0.7, -0.714, 0.714, 0.7, -12.041, 12.296)"
                      fill="url(#linear-gradient-56)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
          <G
            id="Group_61420"
            data-name="Group 61420"
            transform="translate(21.213 5.165)"
            opacity={0.2}
          >
            <G id="Group_61419" data-name="Group 61419">
              <G
                id="Group_61418"
                data-name="Group 61418"
                clipPath="url(#clip-path-88)"
              >
                <G
                  id="Group_61417"
                  data-name="Group 61417"
                  transform="translate(0 0)"
                >
                  <G
                    id="Group_61416"
                    data-name="Group 61416"
                    clipPath="url(#clip-path-89)"
                  >
                    <Rect
                      id="Rectangle_8488"
                      data-name="Rectangle 8488"
                      width={44.111}
                      height={44.186}
                      transform="matrix(0.7, -0.714, 0.714, 0.7, -14.342, 14.645)"
                      fill="url(#linear-gradient-57)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61424"
        data-name="Group 61424"
        transform="translate(59.039 17.244)"
      >
        <G
          id="Group_61423"
          data-name="Group 61423"
          clipPath="url(#clip-path-90)"
        >
          <Rect
            id="Rectangle_8491"
            data-name="Rectangle 8491"
            width={21.947}
            height={21.792}
            transform="translate(-7.276 5.275) rotate(-35.942)"
            fill="url(#linear-gradient-58)"
          />
        </G>
      </G>
      <G
        id="Group_61426"
        data-name="Group 61426"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61425"
          data-name="Group 61425"
          clipPath="url(#clip-path-73)"
        >
          <Rect
            id="Rectangle_8492"
            data-name="Rectangle 8492"
            width={3.795}
            height={10.271}
            transform="translate(6.487 23.955)"
            fill="#fff"
          />
          <Path
            id="Path_67657"
            data-name="Path 67657"
            d="M116.226,153.364v10.271l-2.583,1.778V155.142Z"
            transform="translate(-95.55 -120.403)"
            fill="#afafdc"
          />
          <Path
            id="Path_67658"
            data-name="Path 67658"
            d="M96.871,150.539V160.81l-6.506-3.564V146.975Z"
            transform="translate(-78.778 -115.8)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61428"
        data-name="Group 61428"
        transform="translate(24.2 16.998)"
      >
        <G
          id="Group_61427"
          data-name="Group 61427"
          clipPath="url(#clip-path-92)"
        >
          <Image
            id="Rectangle_8494"
            data-name="Rectangle 8494"
            width={46.951}
            height={27.668}
            transform="translate(-0.166 -0.013)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAABjCAYAAAAPZEvDAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAqKADAAQAAAABAAAAYwAAAADMgeYmAAACuklEQVR4Ae3SOWLbQAAEQdr//7JA7wGAguzEWQfFQOK1wHCmfr3H4zUex/E+xrP5Zz7Gy/F8vTdejOfrzfdrfbz/rO/+dWYfXt8fx9fZdZV1Zpw//z/uM1+Me6yPvn1+7C//ODOu9s88d97/+w0z4ud6M8l5/rh+3852hfvkvDo5z6wvPLLOd+a1r9//dd7n+3vzfuP1fd99Ztz7PruuMf+8vtab+7vzzHicZz+d7GuPT85rzg7H0/1b1nvHdb/5ndX558z+7vPa89Z7/3Gt++x+b913Xf9xZmW7v7vOzLDzzP7oeD+7mJ+tT67r390fvydODw1UGwC0uoxcqwFAQUg3AGh6HuEAZSDdAKDpeYQDlIF0A4Cm5xEOUAbSDQCankc4QBlINwBoeh7hAGUg3QCg6XmEA5SBdAOApucRDlAG0g0Amp5HOEAZSDcAaHoe4QBlIN0AoOl5hAOUgXQDgKbnEQ5QBtINAJqeRzhAGUg3AGh6HuEAZSDdAKDpeYQDlIF0A4Cm5xEOUAbSDQCankc4QBlINwBoeh7hAGUg3QCg6XmEA5SBdAOApucRDlAG0g0Amp5HOEAZSDcAaHoe4QBlIN0AoOl5hAOUgXQDgKbnEQ5QBtINAJqeRzhAGUg3AGh6HuEAZSDdAKDpeYQDlIF0A4Cm5xEOUAbSDQCankc4QBlINwBoeh7hAGUg3QCg6XmEA5SBdAOApucRDlAG0g0Amp5HOEAZSDcAaHoe4QBlIN0AoOl5hAOUgXQDgKbnEQ5QBtINAJqeRzhAGUg3AGh6HuEAZSDdAKDpeYQDlIF0A4Cm5xEOUAbSDQCankc4QBlINwBoeh7hAGUg3QCg6XmEA5SBdAOApucRDlAG0g0Amp5HOEAZSDcAaHoe4QBlIN0AoOl5hAOUgXQDgKbnEQ5QBtINAJqeR7g/FzJZvYEXi9wAAAAASUVORK5CYII="
          />
        </G>
      </G>
      <G
        id="Group_61450"
        data-name="Group 61450"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61449"
          data-name="Group 61449"
          clipPath="url(#clip-path-73)"
        >
          <G
            id="Group_61433"
            data-name="Group 61433"
            transform="translate(45.09 32.21)"
            opacity={0.55}
          >
            <G id="Group_61432" data-name="Group 61432">
              <G
                id="Group_61431"
                data-name="Group 61431"
                clipPath="url(#clip-path-94)"
              >
                <G
                  id="Group_61430"
                  data-name="Group 61430"
                  transform="translate(0 0)"
                >
                  <G
                    id="Group_61429"
                    data-name="Group 61429"
                    clipPath="url(#clip-path-95)"
                  >
                    <Use
                      id="Rectangle_8495"
                      data-name="Rectangle 8495"
                      transform="translate(-0.068 -0.253)"
                      xlinkHref="#image"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
          <G
            id="Group_61438"
            data-name="Group 61438"
            transform="translate(51.757 28.587)"
            opacity={0.55}
          >
            <G id="Group_61437" data-name="Group 61437">
              <G
                id="Group_61436"
                data-name="Group 61436"
                clipPath="url(#clip-path-94)"
              >
                <G id="Group_61435" data-name="Group 61435">
                  <G
                    id="Group_61434"
                    data-name="Group 61434"
                    clipPath="url(#clip-path-97)"
                  >
                    <Use
                      id="Rectangle_8497"
                      data-name="Rectangle 8497"
                      transform="translate(-0.028 -0.262)"
                      xlinkHref="#image"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
          <G
            id="Group_61443"
            data-name="Group 61443"
            transform="translate(56.164 21.777)"
            opacity={0.2}
          >
            <G id="Group_61442" data-name="Group 61442">
              <G
                id="Group_61441"
                data-name="Group 61441"
                clipPath="url(#clip-path-94)"
              >
                <G id="Group_61440" data-name="Group 61440">
                  <G
                    id="Group_61439"
                    data-name="Group 61439"
                    clipPath="url(#clip-path-99)"
                  >
                    <Use
                      id="Rectangle_8499"
                      data-name="Rectangle 8499"
                      transform="translate(-0.242 -0.16)"
                      xlinkHref="#image-2"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
          <G
            id="Group_61448"
            data-name="Group 61448"
            transform="translate(53.694 13.968)"
            opacity={0.2}
          >
            <G id="Group_61447" data-name="Group 61447">
              <G
                id="Group_61446"
                data-name="Group 61446"
                clipPath="url(#clip-path-94)"
              >
                <G id="Group_61445" data-name="Group 61445">
                  <G
                    id="Group_61444"
                    data-name="Group 61444"
                    clipPath="url(#clip-path-101)"
                  >
                    <Use
                      id="Rectangle_8501"
                      data-name="Rectangle 8501"
                      transform="translate(-0.009 -0.176)"
                      xlinkHref="#image"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61452"
        data-name="Group 61452"
        transform="translate(48.321 44.075)"
      >
        <G
          id="Group_61451"
          data-name="Group 61451"
          clipPath="url(#clip-path-102)"
        >
          <Use
            id="Rectangle_8504"
            data-name="Rectangle 8504"
            transform="translate(-0.252 -0.261)"
            xlinkHref="#image-2"
          />
        </G>
      </G>
      <G
        id="Group_61454"
        data-name="Group 61454"
        transform="translate(39.31 43.264)"
      >
        <G
          id="Group_61453"
          data-name="Group 61453"
          clipPath="url(#clip-path-103)"
        >
          <Image
            id="Rectangle_8505"
            data-name="Rectangle 8505"
            width={1.677}
            height={0.838}
            transform="translate(-0.184 -0.009)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAADCAYAAACwAX77AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAABqADAAQAAAABAAAAAwAAAACAuJDvAAAAF0lEQVQIHWP8//+/EgMWwIRFDCyEUwIA5L8DJaMAWL8AAAAASUVORK5CYII="
          />
        </G>
      </G>
      <G
        id="Group_61456"
        data-name="Group 61456"
        transform="translate(31.221 40.601)"
      >
        <G
          id="Group_61455"
          data-name="Group 61455"
          clipPath="url(#clip-path-104)"
        >
          <Use
            id="Rectangle_8506"
            data-name="Rectangle 8506"
            transform="translate(-0.2 -0.141)"
            xlinkHref="#image"
          />
        </G>
      </G>
      <G
        id="Group_61458"
        data-name="Group 61458"
        transform="translate(26.659 37.215)"
      >
        <G
          id="Group_61457"
          data-name="Group 61457"
          clipPath="url(#clip-path-105)"
        >
          <Use
            id="Rectangle_8507"
            data-name="Rectangle 8507"
            transform="translate(-0.109 -0.108)"
            xlinkHref="#image"
          />
        </G>
      </G>
      <G
        id="Group_61460"
        data-name="Group 61460"
        transform="translate(24.201 26.898)"
      >
        <G
          id="Group_61459"
          data-name="Group 61459"
          clipPath="url(#clip-path-106)"
        >
          <Use
            id="Rectangle_8508"
            data-name="Rectangle 8508"
            transform="translate(-0.167 -0.131)"
            xlinkHref="#image"
          />
        </G>
      </G>
      <G
        id="Group_61462"
        data-name="Group 61462"
        transform="translate(28.915 21.568)"
      >
        <G
          id="Group_61461"
          data-name="Group 61461"
          clipPath="url(#clip-path-107)"
        >
          <Use
            id="Rectangle_8509"
            data-name="Rectangle 8509"
            transform="translate(-0.129 -0.112)"
            xlinkHref="#image"
          />
        </G>
      </G>
      <G
        id="Group_61464"
        data-name="Group 61464"
        transform="translate(36.611 18.004)"
      >
        <G
          id="Group_61463"
          data-name="Group 61463"
          clipPath="url(#clip-path-108)"
        >
          <Use
            id="Rectangle_8510"
            data-name="Rectangle 8510"
            transform="translate(-0.001 -0.18)"
            xlinkHref="#image"
          />
        </G>
      </G>
      <G
        id="Group_61476"
        data-name="Group 61476"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61475"
          data-name="Group 61475"
          clipPath="url(#clip-path-73)"
        >
          <G
            id="Group_61469"
            data-name="Group 61469"
            transform="translate(37.911 7.075)"
            opacity={0.55}
          >
            <G id="Group_61468" data-name="Group 61468">
              <G
                id="Group_61467"
                data-name="Group 61467"
                clipPath="url(#clip-path-94)"
              >
                <G id="Group_61466" data-name="Group 61466">
                  <G
                    id="Group_61465"
                    data-name="Group 61465"
                    clipPath="url(#clip-path-111)"
                  >
                    <Use
                      id="Rectangle_8511"
                      data-name="Rectangle 8511"
                      transform="translate(-0.155 -0.269)"
                      xlinkHref="#image"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
          <G
            id="Group_61474"
            data-name="Group 61474"
            transform="translate(46.487 9.286)"
            opacity={0.55}
          >
            <G id="Group_61473" data-name="Group 61473">
              <G
                id="Group_61472"
                data-name="Group 61472"
                clipPath="url(#clip-path-94)"
              >
                <G id="Group_61471" data-name="Group 61471">
                  <G
                    id="Group_61470"
                    data-name="Group 61470"
                    clipPath="url(#clip-path-113)"
                  >
                    <Use
                      id="Rectangle_8513"
                      data-name="Rectangle 8513"
                      transform="translate(-0.068 -0.245)"
                      xlinkHref="#image"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61478"
        data-name="Group 61478"
        transform="translate(23.739 32.656)"
      >
        <G
          id="Group_61477"
          data-name="Group 61477"
          clipPath="url(#clip-path-114)"
        >
          <Image
            id="Rectangle_8516"
            data-name="Rectangle 8516"
            width={1.956}
            height={0.838}
            transform="translate(-0.264 -0.021)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAADCAYAAABfwxXFAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAB6ADAAQAAAABAAAAAwAAAAAHHlusAAAAF0lEQVQIHWP8//+/EgMOwIRDHCyMVxIACnIDJbJbP2sAAAAASUVORK5CYII="
          />
        </G>
      </G>
      <G
        id="Group_61480"
        data-name="Group 61480"
        transform="translate(25.19 17.728)"
      >
        <G
          id="Group_61479"
          data-name="Group 61479"
          clipPath="url(#clip-path-115)"
        >
          <Image
            id="Rectangle_8517"
            data-name="Rectangle 8517"
            width={44.715}
            height={25.991}
            transform="translate(-0.038 -0.184)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABdCAYAAAAiw23qAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAoKADAAQAAAABAAAAXQAAAAA0gK9fAAACD0lEQVR4Ae3S0WrCQBRF0dT//2VbE+HCUBzFp/2yCmI6mhzZrJ+/8+84jt/zdb2v1+vZ7nz9zlzP++6e3fmn++bzeV+fs15/+vyb77561no2z7rO5nWd3ZeWcz73rf/P9bfP2T3r1XPmu/9/07vfOffM75v33fPffb6753l+O0P5UyArAGCW3vBVAEAO0gIApvmNA8hAWgDANL9xABlICwCY5jcOIANpAQDT/MYBZCAtAGCa3ziADKQFAEzzGweQgbQAgGl+4wAykBYAMM1vHEAG0gIApvmNA8hAWgDANL9xABlICwCY5jcOIANpAQDT/MYBZCAtAGCa3ziADKQFAEzzGweQgbQAgGl+4wAykBYAMM1vHEAG0gIApvmNA8hAWgDANL9xABlICwCY5jcOIANpAQDT/MYBZCAtAGCa3ziADKQFAEzzGweQgbQAgGl+4wAykBYAMM1vHEAG0gIApvmNA8hAWgDANL9xABlICwCY5jcOIANpAQDT/MYBZCAtAGCa3ziADKQFAEzzGweQgbQAgGl+4wAykBYAMM1vHEAG0gIApvmNA8hAWgDANL9xABlICwCY5jcOIANpAQDT/MYBZCAtAGCa3ziADKQFAEzzGweQgbQAgGl+4wAykBYAMM1vHEAG0gIApvmNA8hAWgDANL9xABlICwCY5jcOIANpAQDT/MYBZCAtAGCa3/gDT7ait3wvahgAAAAASUVORK5CYII="
          />
        </G>
      </G>
      <G
        id="Group_61490"
        data-name="Group 61490"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61489"
          data-name="Group 61489"
          clipPath="url(#clip-path-73)"
        >
          <G
            id="Group_61483"
            data-name="Group 61483"
            transform="translate(11.61 7.804)"
            opacity={0}
          >
            <G id="Group_61482" data-name="Group 61482">
              <G
                id="Group_61481"
                data-name="Group 61481"
                clipPath="url(#clip-path-117)"
              >
                <Path
                  id="Path_67675"
                  data-name="Path 67675"
                  d="M134.692,76.2c0,7.1-9.905,12.853-22.124,12.853S90.445,83.3,90.445,76.2s9.9-12.853,22.123-12.853,22.124,5.754,22.124,12.853"
                  transform="translate(-90.445 -63.351)"
                />
              </G>
            </G>
          </G>
          <Image
            id="Rectangle_8519"
            data-name="Rectangle 8519"
            width={47.789}
            height={29.344}
            transform="translate(9.809 5.967)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAABpCAYAAABFyNOmAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAq6ADAAQAAAABAAAAaQAAAADVq6UDAAAJfUlEQVR4Ae2dW4scRRTHu0OQqIiIYFw1yc5lFSJewAiSBxEf8iDiQxLM7sws4jfwMV9C/ArCzF4CSXwTfBGf8qK+CKIws7vJgiRBQhCREHazY1VXV091T3dP3fr+H9jtrqpzTlX967dnqy+buNPp1MFHUoFr+18TywPHcQ8d1zkk5/SLlOmR1PFy0ObV+e2+veuGy9T/8iu/El98FijgAlai0PadIfl+FPpy3XCZtftwWoaVg84gZz8MDHzWH62/+PK/C9ay9s3Haz9DcYJbt78jxSOSFX0QQ0CKlknnpr+Gov7RclK/jnPz/tOkkUB7kmbmRn7qC+vW3g/kV3NcdsxzoeVhdKWGJR9PKly1jOoD6+beT37GpAvKIc17NUxhivpHy3nPp1T9VRvWzb1bApgUUPrJc4Hz7IvNrsHfqwfr5u4vZL3EPWfc8klAJPd7Ny54Qp1EnwmerNrUPzV4HRqrAevG7m+ziyIP1DJobwqXqX8ZNMh1DOWFdWPnz8gFkqowtmEwjVe0v6p+pbMvH6wbOxOiUlEXSDYXCHDaVJPEKgesGzv7AqD8QsnGVOeBsb5VlRrm/Dik3AIjU/8gUJVPioV1tPMXEW/q70ez0rGIhVboM/anR8E/K9nKF7cYWEeT+0QKkkG9m/ZVXJjomKNl1ZU29Vftr5L2+cI6mjxgkOZ+RW8Phiunr1pd6et337Mar8bB8oN1NHnogxonpz2Y4qKzusV9rJ75Mtk9o5bLS+lvXN2490JGPVcubPZvXY0m9G0hfnUfOfrP7tmLJRSm+HZaH7x8ItpEnv3P2UTa+f54dflS5VYKA87wbsBw/MiZvWYnI/XizCcTJc5mbfmzuGrUVUuBbLYBw/FjIgPNkqofO8CutS6odgz78itgH9bhmL5vqQOqmVq91kdmAeBddgXswToci3tOk3nLZ9de67xJR/CtlgJ2YGWg2px5MrC99jmbHSFWdRQwh9U+qPHq9drvxjegtikKmMGaLahTp98+25SFwDwXK6APa5ag9jtvLB46LJqmgB6sWYHa73SatgCYr7wCx+RNfcvsQG0pjwUOjVJALbOmg5p8BZ8m6aBzKq0ZbVCAKyAPazqoPJ78cdBdkjeGJRRwHLltgDyoctl10D0J8aGAqgKLM6s8qLxvH9iYN+AH3Re5EY5QQFWB9MyqDmpy/4Mu3stMVgctEgqkwyoRIMEkvB0YdJ9PsEM1FJBWIBlW86zKgB10n5MeDQyhQIoC8bCag8q6HHSfTekbTVBASYF4WJVCJBivd59JaEE1FNBSYB5WG1l1feWE1mjgBAVSFJiHNcVYqml95SkpOxhBAUUFwrCaZtX1lcX3bRUHCHMowBUIw8prdY7rK/Zi6fQPn9orYAew9ZWYx1W11w4TzFmBGaymW4CcB47umqfADFbduSOr6ioHP0UFGKzIqoqywbwIBcwyK7JqEWvW2D7NYG2sbJh4EQrow4qsWsR6NbpPfVgbLRsmX4QCxxxcXBWhO/rUUEAvs2ILoCE1XEwV0IPVtFf4QwENBQCrhmhwKUYBwFqM7uhVQwHAqiEaXIpRALAWozt61VAAsGqIBpdiFACsxeiOXjUUAKwaosGlGAX0YMVTr2JWq+G9HnPwNKrhCFRn+nqZtTrzw0hrpIA+rNgK1AiDakxFH9ZqzA+jrJECZrAiu9YIhfJPhcGKi6zyrxRGKPl/CqQJheyapg7aLCpgtg2wOBCEggKLFJjBarIVQHZdpDPaLSgwg9U02HD8xDQE/KFAmgJhWE2yK+1lOD5I6wxtUMBEgTCsJpG473D8mJ/iCAVsKjAPq2l2tTk6xIICggLzsAqN2qfD8SNtXzhCgQQF3Ok0/P+rBXbqV/hHxFf4co8cl5Tx/2AFkuLETIHkzGprOzCa/GM2RHhDAaZAMqw2FRpNHtoMh1jNVCAdVlvZlWo7mjxopsSYtS0FkvesYg9y+1dhv0r2qi7Zs4b2sMF+dkr2sS+J4XEOBWQUSM+sPILNDEtjjib3eGgcoYCsAnKZlUdLz7DhTJqcWakduQXhZ95B5zUeHkcokKaAXGZNi2DatrGzbxoC/s1QQC2zUk2Ss6tKZiW2Lr3By+7F8r1tv9NuhuyYpY4C6rDSXuKBVYWVbQfogwMOKz/2O6/rTAY+9VZAD1auSRjaMHTpe1Zi6+1Zp95TLg5p6Eja++2zvCscoYAZrFS/GbA6sNJtANsOhECl2Va49dVvv42lggLmsM6A1YWV+sUAK8AqbhV67XNYtmYqYAdWBiz9S4EZsHLbAH6BJQ8r76PX/qCZS9bcWduDlQFL/1KAAasGa0x2TcisPL64Tei1PmzuEjZn5nZh5brR91nVYY0AqwArBVjcKqy1LvCh4FgfBbKBleozmvxHvrMsG3v0YRQhC+1dDWD1+vP915Y/rc9yNXsm2cHKdWXvs8ZAGwurkF0twSr+oPAfjNXlz/nwcKyOAtnDyrVgrwgK0BYIK396JoK8euYLPtTSHW/eP0HGdOhcPHlYurHlOKD8YKWTGk3+Jt99YBNh9bNrhpmVP5BwHHoHI3wnwsu+Qt9svE+cK6e/olPI5HPjLn34QS9OCYwuBZJ/HZC9OK87ILA2+t9myBdWvtKjyd3gpj//1RxAHMBMIWIwxdpEgJqzibTT+IGN18bjC1sPbjPnS8cxg8kDiJcFmChkrI0C5tv74LmRshfPBzMUL4CV+QNWTo2Ff5gtCKVwMuguOYPOq5IeFCrFjytjrxFXJqxnE40dLUsH8g1N/VX7K6V9sa8IDjqnnH7nTIIyeS6QaV+m/lEJbMeLxq9kuVhYuWT9TotA2+HFmGMei6fSh4ptzHS8fbJYbxpPjFXb8+Olmlm/sxKMZ2P39+C8+BPAVPwaFLRnlZl4v/0meUXwLcE0D2Bk+pCxEYY9d2rqPxewKRXlyqxxqvfb7wTVm7s/B+fVOQGcltaq/LCKE+213w+Km3u3gnO7Jylw5XKXIdp/tGx3thWKVi1YRWF7rfNi0dna+zFUNiuoAKJiGzcqU/+4mLWsqy6s0eVYa30cqtq6/X2obKuQllzZXz2QntKMUgcCcFPkqQ+s0UmuLX8SrXK2b1+fq0uukAFHxia5B/aoN60dbYIC9YVVmGRwurp8OTgXT7bvfCsWhfMojNGyYCp1auov1UldjYp5N6Bqal7b/4YMmT3vD579e8/8yfP74Fk+fS/Afx8gqPPL9J0Br25W5vH4+wSXlv6omix5j/d/f9b04tkh6doAAAAASUVORK5CYII="
          />
          <Path
            id="Path_67676"
            data-name="Path 67676"
            d="M118.959,129.031c-.118-.084-.122-.334-1.232-.129-.207.038-.4.076-.566.11a3.486,3.486,0,0,1-.9.124s-.038-.042.085-.21c.208-.283-.174-.46-.375-.7-.151-.182-.295-.354-.254-.521a.125.125,0,0,0-.075-.146l-.006,0a2.318,2.318,0,0,0-1.386.077,5.041,5.041,0,0,1-.548.109.08.08,0,0,0-.064,0c-.02.014-.011.04.019.058.07.04.136.03.671-.091a3.294,3.294,0,0,1,1.245-.1h0c.013.008.018.029.012.054-.047.192.115.387.272.575.2.244.549.379.364.631-.118.162-.131.248-.043.308l.02.012c.141.075.417.025,1.04-.1.17-.034.358-.072.564-.11,1.071-.2,1.026.057,1.074.09s.011.113-.016.143,0,.044.033.059a.082.082,0,0,0,.087,0,.153.153,0,0,0-.019-.242m-5.234-1.278h0Z"
            transform="translate(-95.536 -101.755)"
            fill="#00236e"
          />
          <G
            id="Group_61488"
            data-name="Group 61488"
            transform="translate(15.882 25.484)"
            opacity={0.6}
          >
            <G id="Group_61487" data-name="Group 61487">
              <G
                id="Group_61486"
                data-name="Group 61486"
                clipPath="url(#clip-path-118)"
              >
                <G
                  id="Group_61485"
                  data-name="Group 61485"
                  transform="translate(0 0)"
                >
                  <G
                    id="Group_61484"
                    data-name="Group 61484"
                    clipPath="url(#clip-path-119)"
                  >
                    <Image
                      id="Rectangle_8520"
                      data-name="Rectangle 8520"
                      width={12.297}
                      height={12.017}
                      transform="translate(-2.161 -4.146)"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAArCAYAAAADgWq5AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALKADAAQAAAABAAAAKwAAAABthhmJAAAFgElEQVRYCbVYPYslRRTtqrczs86EZgb+g9VENNBMZUEwEBQWEUHM5mMjMwMxE8xmdyYR/EBQYRVEWBBMVlgQREQwMTUyEsxmd957XZ5zb93q6p7uft09vc28qXq36nWdPu/ce+6MCyEUj/L6YP8zOeDD03fcHOe4RwXYgOYg5wDt8xvONW8DO9e9ZwfcB7ZvbegDzQp4CKAhe/rAz6LhKSCm6vnSDL+//8V5HyNda1Mekve6FOD39r/8b124JV6rLmBzxydJYv/gm7+vFOXWIoRtjnhhDFu+CIuxAMdKYzTD7x7c+YuMysvFsfDCcihcORbwWGmMAvzWwXe/mwRWhY+g4xgfAoBHW+cY0IMBv3Hw/f21gUyj6lcZV5Y5H8sy9w8FfWXTzV85vHtXNepXrii9K5xDU8AfjB6vEhNc0IOuYQtiiyJsvPems9vWexl+6fDHb5U9aFX1Cq0mCYhuI7u2rjIBy2Xh1m0H9sWGsNwJ+PnDnz5NYCuQGSADLqOCdzbXNYh5dj23An766N7Hy8Kf4fUggm4FhLWc5WxeVY8+RrvW+piu6ezJo1+Otov13g7AoqZSjAsnI3Ta0Cs1DN+hhpOuoWGPH3ykHptTz4nhx49+e5OMppeTeWS5qgCi4VR/hUkwa/KIzDoybzG/nFPPAvjqzT+uLyuAAlKAZ7FcGivWXJc/RCUB3QewAtribjmXqXh3888XIqtnBL0qFmSZoAX4yvmHth5ZI2Mp+SxWMZrpWpMw7Z0jCYVhfmUR1AOArhg24Mo0HsQ9TAx2sFwmKchDxUT0K3wrIpOuROuL50now/G1+9zMjE+gDWilaWUb72HJ51EeypzoWfQawRnQqOG6dGRPH7hNaynpuBFgNOkyGWTSwNoiAs+TCvOUhH4p+q6zHE3FkvByppLaS2qZoOm5LG1S3kK5q/Nyd0di5d52WKeYtZVpDGg5Y6uJGNrO1H4ijjnW8xjrIs8cc6UPmDSYGCoNsJm0m8pdivHbaCZaZLchDUqkYpfSszwA0FFOyN45AeZTGmhWgYaeVSomGasg9SRcwl6sIgBUDSTjkI7FbBze2VmjX3M6A0154IBzgIaVBe9DsYjORxtb+BhTF4TdsWPT7g1OhzlMsnJA3APryRVHdnYGlNh4XQCsYf1NlgkKJwKjWDUBewHvYNsaiw+jraa0nUQf6NEa04dh+wa0jMlDcW5tKj394p9XTbBEVZOEgTVp8H2SRq0+S7WIRqP6pi4bFSLTslUPK3kYG/JomkobWOLpZJigKQ1aqjENShYerOIpybQ0Rjn7yAJhTRgFwS5rgkBmxrjKhPuAAb+Eec/K0gWUYHm1MqxLVRIyYRLTjcSLcTOWpqlI8nVWj8SyMr8J7EbA3GDyQBljT5HKWvYAKYY9Z6gOBBnlgGrQaIIuVI/Y2X10+vaeEdU3dkqi7UMEGRMuJmEmD2QT5aJS4devSRXl4dfBKgnlpBKw6nHr9MYTbee1xZLTtS3mMXNCZvN2Accr1rs7gY4Y5zpGJ2SsfEwdUNwN/3TRf7YkV4RePz95/Vp+xpB5r4bzG5g0YmfX7OjMWCAPaU/RJElnJxpmBamqgjrdFLDEMxgwNxvolITOmqHqr5O2JNSksybJr74+ee1Z3m/KNUrD+QHsJaS8OThfZiq0NHVClj0tfxyiG/ofTl59Ob/P2PlgDec3Nj0TkGiZnVxQLVPT6Oy0o0OMXd5WUe7eu339Rn6PqfNRkrBDTBpwJzEVkUHNCVNfTa2fzQWW508CzA8a6NjZpSRkLVYda/L9evvFA+6f65okifxwkwe+9qux6Zfm/59bz32S75trPjnpmgDIKk2DDcO/x8981Vyf6/2lGSYQY5mAy+Onfp4LXNt9/gfup6SLmHBirQAAAABJRU5ErkJggg=="
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61492"
        data-name="Group 61492"
        transform="translate(31.615 35.331)"
      >
        <G
          id="Group_61491"
          data-name="Group 61491"
          clipPath="url(#clip-path-120)"
        >
          <Rect
            id="Rectangle_8523"
            data-name="Rectangle 8523"
            width={1.872}
            height={5.508}
            transform="matrix(0.012, -1, 1, 0.012, -0.031, 1.806)"
            fill="url(#linear-gradient-59)"
          />
        </G>
      </G>
      <G
        id="Group_61494"
        data-name="Group 61494"
        transform="translate(20.594 26.591)"
      >
        <G
          id="Group_61493"
          data-name="Group 61493"
          clipPath="url(#clip-path-121)"
        >
          <Image
            id="Rectangle_8524"
            data-name="Rectangle 8524"
            width={9.502}
            height={8.943}
            transform="translate(-0.193 -0.104)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIqADAAQAAAABAAAAIAAAAABbctAOAAAFh0lEQVRYCc2Xy5LbNhBFQfAhjcfjcVUWXvj/Py4rJ7alGZF45NxuUiGlkS0nG7OqBYkCgYPbD4BNrTX8Dlf8HSDE0P1vkHxqzmO0u/8sb/PLrsmvTaglhJq9DfVfkMDXJla3NoR2fzfY/SD5pQlFkydMLQBqb4OU0LQ1xK6G9uGnQPe5Jh1iKBMgKQKCZazIZhDNI2GaWY0oCKwr9C8sAKAeoNuu+zGI/F9GbBJIaxAlqcUMhGCXa8w90CxuMZAMSA4ViwVflky/m+66DWIQAgGgjG3IApk6VOlQROYwoQpmUQQVBBEdIuZEP6xg9KkVGK43Yuc2iLmCyfNJIABMvVvqUQQzECKyAjQrcoaICTWYvJtC0wMqF5rv+GyA4eeFm94GSUe5BHeghEMMtNg0hExbMyaYgjIFGJuE+GgUG0wukH402GiQAtGlPhjxE7bxcg2i9PSYAIRYMCWYPJ92fMfGB+7vZhCHsRjRBKzWQFAilleUkGKLGqsYIps0z8pF1yCWmpYdixq4xNTYAwPE9ECsqN27MpUxFCcGghLtiFtecctKLVikVlmyiUxqEllkwWVSXYMU6oTS1NQgKAsuyKbEHqB32CMQtFhNwJSekQCR7BG3tCdS9ehqyGUABlNKkGRRWqywMFRxF21BVLQUWKaKglEZQpBWYqMwqdQwkPGJ7+8dpgww4AIpEk+o8eKxI5cIQhmkmGndPJO8Bs1JJEm2IJZiAlGNUNECpkiVrIwhLkyJ9wTsB4Cw6Yk+e0AYR6sGJPbf3VWmkMdM7RS4JwMsjBvnYmgF0d1zAWIQAplheCCQGQH5lSmFSUvCJQCU8SMgzw7D/02TKOcHhzKIRF/AEgqxENWeAASBMo8v9SWGXVsQg0PNc7W0h1wZGywpbckcYMr0AR//AdAzAz7ggokJ/kYZno8EbDriFVRUqs8157wtsFALAc3l1wUIN+2/GcYKFb6uVj1ZDW0lJqomSMoeuegT359wy4s93LRH4gR3qR/pq2f9eRGuTQT6bZeifXVxvzn3hUbBtrn40yA1OJPIZekxpJfPqPTMbwDlyvMEPpGKmN9axvPfdt/H3yriEIp+dVSBorWNDGdSBzwgk0uvVLUsOVCY/gyxPVjqNnIL8YJvzFQ/9Ky3GpPfGvMMZyRbEJ9cCxKMHphTz9JPhcqLVVSK9t9wES7giv0XnhlDHP7CvlLegaKoeX+eoX54+rLPUFVtofNObQNcpm+jcgBAZC8oWGSAYvlPye5IvxaA7ugQSlku1Q1llRRo+K8dvgD21YqagFXg3FTstDBBaYcGSNuUX1tFVOXKqA505ByhHTT2ZANp6CkIhDY6K+kajPTMBC33fJ/xOiJV4vANO2CvjIFa2n9YVNS4Gh/74V6jo13hZKUHqm3lFKOewFQKLlu+uU4KSA0FKEGvOGDnjWSNA3z3lnIfe9wETMOiYi8YxufEtrq2iugPnS8Lm1LNgNihRvVhTkELfflY5ZpVqkZYiVd26L7k537/AoQMV+0EhioDEIPgpXQO3bufgAhGtA4yV1l7xiezANbK+xPAxMY5XZVhHAtt9xWMJsdVALW7E7EzhhY12gGXDBsITXmtiO7Kd1XnzNWupNRWIBdWU8ieQpWNOjJeHoxwp7mIPg4yOcQO+B1uGfJbp/q3QQwR6VLwM6Z++/uK4kDydkAogAWioji7RnEi6RWU6qeYwCVtj1JAtLsSuscrNWw6fdy85MdsZ0xl0pJNTKKTG8G7bGAOwqeKFdmg9DcYASwmiG1crOe97wXLjo96sdJrxfxuo+3ctnFtYLMi69cJZYbeayxDiIlVqq4Blu/3gSy9z0CCmo8Mfiade1haK3tcwTvf8vTwr4EsQGoFpXfgKxAEuuMVcz2Uvv8D+yq4/tYMn6EAAAAASUVORK5CYII="
          />
        </G>
      </G>
      <G
        id="Group_61496"
        data-name="Group 61496"
        transform="translate(23.595 29.48)"
      >
        <G
          id="Group_61495"
          data-name="Group 61495"
          clipPath="url(#clip-path-122)"
        >
          <Image
            id="Rectangle_8525"
            data-name="Rectangle 8525"
            width={3.354}
            height={3.354}
            transform="translate(-0.12 -0.198)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAAwxNhnAAABPklEQVQoFZWRbUvDMBSFT5q0zepaNpioqPjJ//+nFJW5925rkzTxpFFE0A8WAm3veXLPPVeEEB7xjyf7Uxu8/K2mfvz0VsMdFxj6KcKQQ2QOsmyhpu/I8nPUfgNDV8Ns72H3V3DnGYIrIKSFnGyRdw3K2RPfdwkIXsHsbtGvH2A2d7DsEiwBZcfbg9MQIkDn5wS40xyuXRC6JnTPTpfwZoKs6FD0E4oHZNFatUqANxV91xhoxbZzQjdwhzlv36Y5LnaIlr2tPlMKGYKPR3FYxUI5gt7ocXjExEaNTB2ENEyho4UTpG6R12tkyvD9yEFb1k787jmTSYDUe6iYxnRJ7xVt+LFLhPJmBVUvIasNlN5/AQcW3uBdCQgf40uxElAUFs0Lz2uMOAFxIwVzHsXlkXto0uIkF8fusXMxe46yD+i3mUvm4TZwAAAAAElFTkSuQmCC"
          />
        </G>
      </G>
      <G
        id="Group_61503"
        data-name="Group 61503"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61502"
          data-name="Group 61502"
          clipPath="url(#clip-path-73)"
        >
          <G
            id="Group_61501"
            data-name="Group 61501"
            transform="translate(30.103 26.682)"
            opacity={0.7}
          >
            <G id="Group_61500" data-name="Group 61500">
              <G
                id="Group_61499"
                data-name="Group 61499"
                clipPath="url(#clip-path-124)"
              >
                <G
                  id="Group_61498"
                  data-name="Group 61498"
                  transform="translate(0 0)"
                >
                  <G
                    id="Group_61497"
                    data-name="Group 61497"
                    clipPath="url(#clip-path-125)"
                  >
                    <Rect
                      id="Rectangle_8526"
                      data-name="Rectangle 8526"
                      width={9.455}
                      height={6.149}
                      transform="translate(0 -0.645)"
                      fill="url(#linear-gradient-60)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61505"
        data-name="Group 61505"
        transform="translate(43.781 36.551)"
      >
        <G
          id="Group_61504"
          data-name="Group 61504"
          clipPath="url(#clip-path-126)"
        >
          <Rect
            id="Rectangle_8529"
            data-name="Rectangle 8529"
            width={9.335}
            height={6.144}
            transform="translate(0 -0.591)"
            fill="url(#linear-gradient-61)"
          />
        </G>
      </G>
      <G
        id="Group_61585"
        data-name="Group 61585"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61584"
          data-name="Group 61584"
          clipPath="url(#clip-path-73)"
        >
          <Path
            id="Path_67683"
            data-name="Path 67683"
            d="M187.787,139.163a.358.358,0,0,0-.29-.046c-.057.032-.02.105.083.163a.36.36,0,0,0,.29.046c.057-.032.02-.105-.083-.163"
            transform="translate(-148.745 -110.127)"
            fill="#fff"
          />
          <Path
            id="Path_67684"
            data-name="Path 67684"
            d="M171.606,131.373a.351.351,0,0,0-.286-.045c-.056.032-.018.105.084.162a.35.35,0,0,0,.286.045c.056-.032.018-.105-.084-.163"
            transform="translate(-137.089 -104.515)"
            fill="#fff"
          />
          <G
            id="Group_61583"
            data-name="Group 61583"
            transform="translate(29.862 25.604)"
            opacity={0.3}
          >
            <G id="Group_61582" data-name="Group 61582">
              <G
                id="Group_61581"
                data-name="Group 61581"
                clipPath="url(#clip-path-128)"
              >
                <G
                  id="Group_61510"
                  data-name="Group 61510"
                  transform="translate(0.568 1.916)"
                  opacity={0.3}
                >
                  <G id="Group_61509" data-name="Group 61509">
                    <G
                      id="Group_61508"
                      data-name="Group 61508"
                      clipPath="url(#clip-path-129)"
                    >
                      <G id="Group_61507" data-name="Group 61507">
                        <G
                          id="Group_61506"
                          data-name="Group 61506"
                          clipPath="url(#clip-path-130)"
                        >
                          <Rect
                            id="Rectangle_8530"
                            data-name="Rectangle 8530"
                            width={7.981}
                            height={4.499}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-62)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61515"
                  data-name="Group 61515"
                  transform="translate(1.321 1.473)"
                  opacity={0.3}
                >
                  <G id="Group_61514" data-name="Group 61514">
                    <G
                      id="Group_61513"
                      data-name="Group 61513"
                      clipPath="url(#clip-path-131)"
                    >
                      <G id="Group_61512" data-name="Group 61512">
                        <G
                          id="Group_61511"
                          data-name="Group 61511"
                          clipPath="url(#clip-path-132)"
                        >
                          <Rect
                            id="Rectangle_8532"
                            data-name="Rectangle 8532"
                            width={8.007}
                            height={4.509}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-63)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61520"
                  data-name="Group 61520"
                  transform="translate(2.078 1.029)"
                  opacity={0.3}
                >
                  <G id="Group_61519" data-name="Group 61519">
                    <G
                      id="Group_61518"
                      data-name="Group 61518"
                      clipPath="url(#clip-path-133)"
                    >
                      <G id="Group_61517" data-name="Group 61517">
                        <G
                          id="Group_61516"
                          data-name="Group 61516"
                          clipPath="url(#clip-path-134)"
                        >
                          <Rect
                            id="Rectangle_8534"
                            data-name="Rectangle 8534"
                            width={8.033}
                            height={4.519}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-64)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61525"
                  data-name="Group 61525"
                  transform="translate(2.839 0.582)"
                  opacity={0.3}
                >
                  <G id="Group_61524" data-name="Group 61524">
                    <G
                      id="Group_61523"
                      data-name="Group 61523"
                      clipPath="url(#clip-path-135)"
                    >
                      <G id="Group_61522" data-name="Group 61522">
                        <G
                          id="Group_61521"
                          data-name="Group 61521"
                          clipPath="url(#clip-path-136)"
                        >
                          <Rect
                            id="Rectangle_8536"
                            data-name="Rectangle 8536"
                            width={8.059}
                            height={4.529}
                            transform="translate(0)"
                            fill="url(#linear-gradient-65)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61530"
                  data-name="Group 61530"
                  transform="translate(3.605 0.132)"
                  opacity={0.3}
                >
                  <G id="Group_61529" data-name="Group 61529">
                    <G
                      id="Group_61528"
                      data-name="Group 61528"
                      clipPath="url(#clip-path-137)"
                    >
                      <G id="Group_61527" data-name="Group 61527">
                        <G
                          id="Group_61526"
                          data-name="Group 61526"
                          clipPath="url(#clip-path-138)"
                        >
                          <Rect
                            id="Rectangle_8538"
                            data-name="Rectangle 8538"
                            width={8.085}
                            height={4.539}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-66)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61535"
                  data-name="Group 61535"
                  transform="translate(0.177 2.145)"
                  opacity={0.3}
                >
                  <G id="Group_61534" data-name="Group 61534">
                    <G
                      id="Group_61533"
                      data-name="Group 61533"
                      clipPath="url(#clip-path-139)"
                    >
                      <G id="Group_61532" data-name="Group 61532">
                        <G
                          id="Group_61531"
                          data-name="Group 61531"
                          clipPath="url(#clip-path-140)"
                        >
                          <Rect
                            id="Rectangle_8540"
                            data-name="Rectangle 8540"
                            width={7.967}
                            height={4.494}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-67)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61540"
                  data-name="Group 61540"
                  transform="translate(0.928 1.704)"
                  opacity={0.3}
                >
                  <G id="Group_61539" data-name="Group 61539">
                    <G
                      id="Group_61538"
                      data-name="Group 61538"
                      clipPath="url(#clip-path-141)"
                    >
                      <G id="Group_61537" data-name="Group 61537">
                        <G
                          id="Group_61536"
                          data-name="Group 61536"
                          clipPath="url(#clip-path-142)"
                        >
                          <Rect
                            id="Rectangle_8542"
                            data-name="Rectangle 8542"
                            width={7.993}
                            height={4.504}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-68)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61545"
                  data-name="Group 61545"
                  transform="translate(1.683 1.261)"
                  opacity={0.3}
                >
                  <G id="Group_61544" data-name="Group 61544">
                    <G
                      id="Group_61543"
                      data-name="Group 61543"
                      clipPath="url(#clip-path-143)"
                    >
                      <G id="Group_61542" data-name="Group 61542">
                        <G
                          id="Group_61541"
                          data-name="Group 61541"
                          clipPath="url(#clip-path-144)"
                        >
                          <Rect
                            id="Rectangle_8544"
                            data-name="Rectangle 8544"
                            width={8.019}
                            height={4.513}
                            fill="url(#linear-gradient-69)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61550"
                  data-name="Group 61550"
                  transform="translate(2.442 0.815)"
                  opacity={0.3}
                >
                  <G id="Group_61549" data-name="Group 61549">
                    <G
                      id="Group_61548"
                      data-name="Group 61548"
                      clipPath="url(#clip-path-145)"
                    >
                      <G id="Group_61547" data-name="Group 61547">
                        <G
                          id="Group_61546"
                          data-name="Group 61546"
                          clipPath="url(#clip-path-146)"
                        >
                          <Rect
                            id="Rectangle_8546"
                            data-name="Rectangle 8546"
                            width={8.045}
                            height={4.524}
                            fill="url(#linear-gradient-70)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61555"
                  data-name="Group 61555"
                  transform="translate(3.205 0.367)"
                  opacity={0.3}
                >
                  <G id="Group_61554" data-name="Group 61554">
                    <G
                      id="Group_61553"
                      data-name="Group 61553"
                      clipPath="url(#clip-path-147)"
                    >
                      <G id="Group_61552" data-name="Group 61552">
                        <G
                          id="Group_61551"
                          data-name="Group 61551"
                          clipPath="url(#clip-path-148)"
                        >
                          <Rect
                            id="Rectangle_8548"
                            data-name="Rectangle 8548"
                            width={8.072}
                            height={4.533}
                            fill="url(#linear-gradient-71)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61560"
                  data-name="Group 61560"
                  transform="translate(1.94 1.106)"
                  opacity={0.3}
                >
                  <G id="Group_61559" data-name="Group 61559">
                    <G
                      id="Group_61558"
                      data-name="Group 61558"
                      clipPath="url(#clip-path-149)"
                    >
                      <G id="Group_61557" data-name="Group 61557">
                        <G
                          id="Group_61556"
                          data-name="Group 61556"
                          clipPath="url(#clip-path-150)"
                        >
                          <Rect
                            id="Rectangle_8550"
                            data-name="Rectangle 8550"
                            width={3.826}
                            height={2.215}
                            transform="translate(0)"
                            fill="url(#linear-gradient-72)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61565"
                  data-name="Group 61565"
                  transform="translate(6.217 3.544)"
                  opacity={0.3}
                >
                  <G id="Group_61564" data-name="Group 61564">
                    <G
                      id="Group_61563"
                      data-name="Group 61563"
                      clipPath="url(#clip-path-151)"
                    >
                      <G id="Group_61562" data-name="Group 61562">
                        <G
                          id="Group_61561"
                          data-name="Group 61561"
                          clipPath="url(#clip-path-152)"
                        >
                          <Rect
                            id="Rectangle_8552"
                            data-name="Rectangle 8552"
                            width={3.895}
                            height={2.19}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-73)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61570"
                  data-name="Group 61570"
                  transform="translate(7.958 4.537)"
                  opacity={0.3}
                >
                  <G id="Group_61569" data-name="Group 61569">
                    <G
                      id="Group_61568"
                      data-name="Group 61568"
                      clipPath="url(#clip-path-153)"
                    >
                      <G
                        id="Group_61567"
                        data-name="Group 61567"
                        transform="translate(0 0)"
                      >
                        <G
                          id="Group_61566"
                          data-name="Group 61566"
                          clipPath="url(#clip-path-154)"
                        >
                          <Rect
                            id="Rectangle_8554"
                            data-name="Rectangle 8554"
                            width={3.923}
                            height={2.179}
                            transform="translate(0)"
                            fill="url(#linear-gradient-74)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G id="Group_61575" data-name="Group 61575" opacity={0.3}>
                  <G id="Group_61574" data-name="Group 61574">
                    <G
                      id="Group_61573"
                      data-name="Group 61573"
                      clipPath="url(#clip-path-155)"
                    >
                      <G id="Group_61572" data-name="Group 61572">
                        <G
                          id="Group_61571"
                          data-name="Group 61571"
                          clipPath="url(#clip-path-156)"
                        >
                          <Rect
                            id="Rectangle_8556"
                            data-name="Rectangle 8556"
                            width={3.794}
                            height={2.227}
                            transform="translate(0 0)"
                            fill="url(#linear-gradient-75)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61580"
                  data-name="Group 61580"
                  transform="translate(4.082 2.324)"
                  opacity={0.3}
                >
                  <G id="Group_61579" data-name="Group 61579">
                    <G
                      id="Group_61578"
                      data-name="Group 61578"
                      clipPath="url(#clip-path-157)"
                    >
                      <G id="Group_61577" data-name="Group 61577">
                        <G
                          id="Group_61576"
                          data-name="Group 61576"
                          clipPath="url(#clip-path-158)"
                        >
                          <Rect
                            id="Rectangle_8558"
                            data-name="Rectangle 8558"
                            width={3.865}
                            height={2.205}
                            fill="url(#linear-gradient-76)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61587"
        data-name="Group 61587"
        transform="translate(50.791 22.229)"
      >
        <G
          id="Group_61586"
          data-name="Group 61586"
          clipPath="url(#clip-path-159)"
        >
          <Rect
            id="Rectangle_8562"
            data-name="Rectangle 8562"
            width={0.448}
            height={0.239}
            transform="translate(0)"
            fill="url(#linear-gradient-77)"
          />
        </G>
      </G>
      <G
        id="Group_61589"
        data-name="Group 61589"
        transform="translate(56.01 19.894)"
      >
        <G
          id="Group_61588"
          data-name="Group 61588"
          clipPath="url(#clip-path-160)"
        >
          <Rect
            id="Rectangle_8563"
            data-name="Rectangle 8563"
            width={0.637}
            height={0.339}
            fill="url(#linear-gradient-78)"
          />
        </G>
      </G>
      <G
        id="Group_61591"
        data-name="Group 61591"
        transform="translate(55.918 19.942)"
      >
        <G
          id="Group_61590"
          data-name="Group 61590"
          clipPath="url(#clip-path-161)"
        >
          <Rect
            id="Rectangle_8564"
            data-name="Rectangle 8564"
            width={0.882}
            height={0.47}
            transform="translate(0)"
            fill="url(#linear-gradient-79)"
          />
        </G>
      </G>
      <G
        id="Group_61593"
        data-name="Group 61593"
        transform="translate(58.441 21.189)"
      >
        <G
          id="Group_61592"
          data-name="Group 61592"
          clipPath="url(#clip-path-162)"
        >
          <Rect
            id="Rectangle_8565"
            data-name="Rectangle 8565"
            width={0.745}
            height={0.396}
            fill="url(#linear-gradient-80)"
          />
        </G>
      </G>
      <G
        id="Group_61595"
        data-name="Group 61595"
        transform="translate(58.348 21.237)"
      >
        <G
          id="Group_61594"
          data-name="Group 61594"
          clipPath="url(#clip-path-163)"
        >
          <Rect
            id="Rectangle_8566"
            data-name="Rectangle 8566"
            width={0.494}
            height={0.262}
            transform="translate(0)"
            fill="url(#linear-gradient-81)"
          />
        </G>
      </G>
      <G
        id="Group_61597"
        data-name="Group 61597"
        transform="translate(60.961 22.533)"
      >
        <G
          id="Group_61596"
          data-name="Group 61596"
          clipPath="url(#clip-path-164)"
        >
          <Rect
            id="Rectangle_8567"
            data-name="Rectangle 8567"
            width={0.485}
            height={0.256}
            transform="translate(0 0)"
            fill="url(#linear-gradient-82)"
          />
        </G>
      </G>
      <G
        id="Group_61599"
        data-name="Group 61599"
        transform="translate(60.866 22.58)"
      >
        <G
          id="Group_61598"
          data-name="Group 61598"
          clipPath="url(#clip-path-165)"
        >
          <Rect
            id="Rectangle_8568"
            data-name="Rectangle 8568"
            width={0.556}
            height={0.295}
            fill="url(#linear-gradient-83)"
          />
        </G>
      </G>
      <G
        id="Group_61601"
        data-name="Group 61601"
        transform="translate(63.456 23.863)"
      >
        <G
          id="Group_61600"
          data-name="Group 61600"
          clipPath="url(#clip-path-166)"
        >
          <Rect
            id="Rectangle_8569"
            data-name="Rectangle 8569"
            width={0.689}
            height={0.364}
            transform="translate(0 0)"
            fill="url(#linear-gradient-84)"
          />
        </G>
      </G>
      <G
        id="Group_61603"
        data-name="Group 61603"
        transform="translate(63.359 23.91)"
      >
        <G
          id="Group_61602"
          data-name="Group 61602"
          clipPath="url(#clip-path-167)"
        >
          <Rect
            id="Rectangle_8570"
            data-name="Rectangle 8570"
            width={0.561}
            height={0.296}
            transform="translate(0)"
            fill="url(#linear-gradient-85)"
          />
        </G>
      </G>
      <G
        id="Group_61605"
        data-name="Group 61605"
        transform="translate(65.952 25.194)"
      >
        <G
          id="Group_61604"
          data-name="Group 61604"
          clipPath="url(#clip-path-168)"
        >
          <Rect
            id="Rectangle_8571"
            data-name="Rectangle 8571"
            width={0.436}
            height={0.229}
            transform="translate(0 0)"
            fill="url(#linear-gradient-86)"
          />
        </G>
      </G>
      <G
        id="Group_61607"
        data-name="Group 61607"
        transform="translate(65.854 25.24)"
      >
        <G
          id="Group_61606"
          data-name="Group 61606"
          clipPath="url(#clip-path-169)"
        >
          <Rect
            id="Rectangle_8572"
            data-name="Rectangle 8572"
            width={0.359}
            height={0.188}
            transform="translate(0 0)"
            fill="url(#linear-gradient-87)"
          />
        </G>
      </G>
      <G
        id="Group_61609"
        data-name="Group 61609"
        transform="translate(53.207 23.526)"
      >
        <G
          id="Group_61608"
          data-name="Group 61608"
          clipPath="url(#clip-path-170)"
        >
          <Rect
            id="Rectangle_8573"
            data-name="Rectangle 8573"
            width={0.452}
            height={0.241}
            transform="translate(0 0)"
            fill="url(#linear-gradient-88)"
          />
        </G>
      </G>
      <G
        id="Group_61611"
        data-name="Group 61611"
        transform="translate(55.658 24.842)"
      >
        <G
          id="Group_61610"
          data-name="Group 61610"
          clipPath="url(#clip-path-171)"
        >
          <Rect
            id="Rectangle_8574"
            data-name="Rectangle 8574"
            width={0.456}
            height={0.242}
            transform="translate(0 0)"
            fill="url(#linear-gradient-89)"
          />
        </G>
      </G>
      <G
        id="Group_61613"
        data-name="Group 61613"
        transform="translate(58.111 26.158)"
      >
        <G
          id="Group_61612"
          data-name="Group 61612"
          clipPath="url(#clip-path-172)"
        >
          <Rect
            id="Rectangle_8575"
            data-name="Rectangle 8575"
            width={0.46}
            height={0.243}
            fill="url(#linear-gradient-90)"
          />
        </G>
      </G>
      <G
        id="Group_61615"
        data-name="Group 61615"
        transform="translate(60.581 27.484)"
      >
        <G
          id="Group_61614"
          data-name="Group 61614"
          clipPath="url(#clip-path-173)"
        >
          <Rect
            id="Rectangle_8576"
            data-name="Rectangle 8576"
            width={0.464}
            height={0.244}
            fill="url(#linear-gradient-91)"
          />
        </G>
      </G>
      <G
        id="Group_61636"
        data-name="Group 61636"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61635"
          data-name="Group 61635"
          clipPath="url(#clip-path-73)"
        >
          <G
            id="Group_61634"
            data-name="Group 61634"
            transform="translate(37.567 11.124)"
            opacity={0.7}
          >
            <G id="Group_61633" data-name="Group 61633">
              <G
                id="Group_61632"
                data-name="Group 61632"
                clipPath="url(#clip-path-175)"
              >
                <Path
                  id="Path_67715"
                  data-name="Path 67715"
                  d="M199.157,79.62c-.219-.051-.416-.093-.589-.131-.833-.181-1.212-.263-1.612-.714a11.467,11.467,0,0,0-1.917-1.315,16.236,16.236,0,0,1-1.518-.991,4.774,4.774,0,0,0-2.012-.678,3,3,0,0,1-.595-.137.073.073,0,0,0-.057-.006c-.013.007-.01.02.009.03h0a2.815,2.815,0,0,0,.641.152,4.591,4.591,0,0,1,1.946.65,16.3,16.3,0,0,0,1.529,1,11.462,11.462,0,0,1,1.9,1.3,1.74,1.74,0,0,0,.49.394,4.666,4.666,0,0,0,1.191.354c.173.038.369.08.587.131,1.949.453,2.338.966,2.342.971a.076.076,0,0,0,.056.022c.022,0,.033-.01.025-.022s-.407-.543-2.413-1.009"
                  transform="translate(-188.746 -75.529)"
                  fill="#001a6c"
                />
                <G
                  id="Group_61620"
                  data-name="Group 61620"
                  transform="translate(0 0.044)"
                  opacity={0.7}
                >
                  <G id="Group_61619" data-name="Group 61619">
                    <G
                      id="Group_61618"
                      data-name="Group 61618"
                      clipPath="url(#clip-path-176)"
                    >
                      <G id="Group_61617" data-name="Group 61617">
                        <G
                          id="Group_61616"
                          data-name="Group 61616"
                          clipPath="url(#clip-path-177)"
                        >
                          <Rect
                            id="Rectangle_8577"
                            data-name="Rectangle 8577"
                            width={14.135}
                            height={9.278}
                            transform="matrix(0.972, -0.236, 0.236, 0.972, -1.465, 0.356)"
                            fill="url(#linear-gradient-92)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
                <G
                  id="Group_61622"
                  data-name="Group 61622"
                  transform="translate(2.355 0)"
                >
                  <G
                    id="Group_61621"
                    data-name="Group 61621"
                    clipPath="url(#clip-path-178)"
                  >
                    <Rect
                      id="Rectangle_8579"
                      data-name="Rectangle 8579"
                      width={8.285}
                      height={11.795}
                      transform="translate(-1.571 4.458) rotate(-70.662)"
                      fill="url(#linear-gradient-93)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61624"
                  data-name="Group 61624"
                  transform="translate(0 0.639)"
                >
                  <G
                    id="Group_61623"
                    data-name="Group 61623"
                    clipPath="url(#clip-path-179)"
                  >
                    <Rect
                      id="Rectangle_8580"
                      data-name="Rectangle 8580"
                      width={10.985}
                      height={5.798}
                      transform="translate(0 0)"
                      fill="url(#linear-gradient-94)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61626"
                  data-name="Group 61626"
                  transform="translate(1.158 0.621)"
                >
                  <G
                    id="Group_61625"
                    data-name="Group 61625"
                    clipPath="url(#clip-path-180)"
                  >
                    <Rect
                      id="Rectangle_8581"
                      data-name="Rectangle 8581"
                      width={9.92}
                      height={5.321}
                      transform="translate(0 0)"
                      fill="url(#linear-gradient-95)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61631"
                  data-name="Group 61631"
                  transform="translate(0.965 0.716)"
                  opacity={0.7}
                >
                  <G id="Group_61630" data-name="Group 61630">
                    <G
                      id="Group_61629"
                      data-name="Group 61629"
                      clipPath="url(#clip-path-181)"
                    >
                      <G id="Group_61628" data-name="Group 61628">
                        <G
                          id="Group_61627"
                          data-name="Group 61627"
                          clipPath="url(#clip-path-182)"
                        >
                          <Rect
                            id="Rectangle_8582"
                            data-name="Rectangle 8582"
                            width={9.911}
                            height={5.319}
                            transform="translate(0)"
                            fill="url(#linear-gradient-96)"
                          />
                        </G>
                      </G>
                    </G>
                  </G>
                </G>
              </G>
            </G>
          </G>
          <Path
            id="Path_67721"
            data-name="Path 67721"
            d="M182.067,73.335l.033.018,4.783-2.248-.034-.018Z"
            transform="translate(-144.851 -61.12)"
            fill="#fff"
          />
          <Path
            id="Path_67722"
            data-name="Path 67722"
            d="M190.995,77.971l.034.018,4.666-2.28-.035-.019Z"
            transform="translate(-151.284 -64.438)"
            fill="#fff"
          />
          <Path
            id="Path_67723"
            data-name="Path 67723"
            d="M199.716,82.678l.034.018,4.7-2.268-.035-.018Z"
            transform="translate(-157.568 -67.838)"
            fill="#fff"
          />
          <Path
            id="Path_67724"
            data-name="Path 67724"
            d="M208.5,87.42l.035.019,4.736-2.257-.035-.019Z"
            transform="translate(-163.899 -71.263)"
            fill="#fff"
          />
          <Path
            id="Path_67725"
            data-name="Path 67725"
            d="M217.354,92.2l.035.019,4.773-2.245-.035-.019Z"
            transform="translate(-170.277 -74.713)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61638"
        data-name="Group 61638"
        transform="translate(49.626 26.473)"
      >
        <G
          id="Group_61637"
          data-name="Group 61637"
          clipPath="url(#clip-path-183)"
        >
          <Rect
            id="Rectangle_8586"
            data-name="Rectangle 8586"
            width={9.47}
            height={5.742}
            transform="translate(-0.008)"
            fill="url(#linear-gradient-97)"
          />
        </G>
      </G>
      <G
        id="Group_61640"
        data-name="Group 61640"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61639"
          data-name="Group 61639"
          clipPath="url(#clip-path-73)"
        >
          <Path
            id="Path_67727"
            data-name="Path 67727"
            d="M183.441,99.339a.309.309,0,0,0-.161-.037l.6-1.374a.093.093,0,0,0,.041-.026c.041-.048,0-.127-.094-.176s-.2-.052-.244,0a.064.064,0,0,0-.015.038l-2.159.534a.18.18,0,0,0-.11-.133.267.267,0,0,0-.209-.027l.5-2.26a.1.1,0,0,0,.016-.014c.041-.048,0-.127-.095-.177s-.2-.051-.244,0a.066.066,0,0,0-.013.028l-2.014-.153c.007-.046-.035-.1-.109-.143a.285.285,0,0,0-.191-.033l-.795-1.663a.078.078,0,0,0,.022-.017c.041-.048,0-.127-.094-.176s-.2-.051-.244,0a.057.057,0,0,0-.01.016l-2.094.763-.038.025,2.127-.753a.188.188,0,0,0,.109.125.3.3,0,0,0,.18.035l.8,1.665a.09.09,0,0,0-.015.012c-.041.048,0,.127.094.177s.2.051.244,0h0l2.029.158a.208.208,0,0,0,.107.111.29.29,0,0,0,.188.034l-.492,2.266h0c-.041.048,0,.127.094.176s.2.051.244,0l.005-.009,2.176-.531a.217.217,0,0,0,.1.1.31.31,0,0,0,.155.038l-.6,1.376a.09.09,0,0,0-.036.023c-.041.048,0,.127.094.176s.2.052.244,0a.068.068,0,0,0,.008-.013l2.14.03.023-.031-2.156-.034a.184.184,0,0,0-.11-.129"
            transform="translate(-140.254 -77.259)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_61642"
        data-name="Group 61642"
        transform="translate(47.571 25.807)"
      >
        <G
          id="Group_61641"
          data-name="Group 61641"
          clipPath="url(#clip-path-185)"
        >
          <Rect
            id="Rectangle_8588"
            data-name="Rectangle 8588"
            width={13.211}
            height={7.147}
            transform="translate(0 0)"
            fill="url(#linear-gradient-98)"
          />
        </G>
      </G>
      <G
        id="Group_61644"
        data-name="Group 61644"
        transform="translate(56.415 30.562)"
      >
        <G
          id="Group_61643"
          data-name="Group 61643"
          clipPath="url(#clip-path-186)"
        >
          <Rect
            id="Rectangle_8589"
            data-name="Rectangle 8589"
            width={3.236}
            height={1.761}
            transform="translate(0 0)"
            fill="url(#linear-gradient-99)"
          />
        </G>
      </G>
      <G
        id="Group_61646"
        data-name="Group 61646"
        transform="translate(54.937 29.802)"
      >
        <G
          id="Group_61645"
          data-name="Group 61645"
          transform="translate(0 0)"
          clipPath="url(#clip-path-187)"
        >
          <Rect
            id="Rectangle_8590"
            data-name="Rectangle 8590"
            width={3.236}
            height={1.761}
            transform="translate(-0.001 0.001)"
            fill="url(#linear-gradient-100)"
          />
        </G>
      </G>
      <G
        id="Group_61648"
        data-name="Group 61648"
        transform="translate(53.519 28.994)"
      >
        <G
          id="Group_61647"
          data-name="Group 61647"
          clipPath="url(#clip-path-188)"
        >
          <Rect
            id="Rectangle_8592"
            data-name="Rectangle 8592"
            width={3.236}
            height={1.761}
            transform="translate(0)"
            fill="url(#linear-gradient-101)"
          />
        </G>
      </G>
      <G
        id="Group_61650"
        data-name="Group 61650"
        transform="translate(51.997 28.209)"
      >
        <G
          id="Group_61649"
          data-name="Group 61649"
          clipPath="url(#clip-path-189)"
        >
          <Rect
            id="Rectangle_8593"
            data-name="Rectangle 8593"
            width={3.236}
            height={1.761}
            transform="translate(0 0)"
            fill="url(#linear-gradient-102)"
          />
        </G>
      </G>
      <G
        id="Group_61652"
        data-name="Group 61652"
        transform="translate(50.574 27.438)"
      >
        <G
          id="Group_61651"
          data-name="Group 61651"
          clipPath="url(#clip-path-190)"
        >
          <Rect
            id="Rectangle_8594"
            data-name="Rectangle 8594"
            width={3.236}
            height={1.761}
            transform="translate(0 0)"
            fill="url(#linear-gradient-103)"
          />
        </G>
      </G>
      <G
        id="Group_61654"
        data-name="Group 61654"
        transform="translate(48.984 26.58)"
      >
        <G
          id="Group_61653"
          data-name="Group 61653"
          clipPath="url(#clip-path-191)"
        >
          <Rect
            id="Rectangle_8595"
            data-name="Rectangle 8595"
            width={3.236}
            height={1.761}
            transform="translate(0 0)"
            fill="url(#linear-gradient-104)"
          />
        </G>
      </G>
      <G
        id="Group_61817"
        data-name="Group 61817"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61816"
          data-name="Group 61816"
          clipPath="url(#clip-path-73)"
        >
          <Image
            id="Rectangle_8596"
            data-name="Rectangle 8596"
            width={7.266}
            height={5.31}
            transform="translate(47.817 17.705)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAATCAYAAACORR0GAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAGqADAAQAAAABAAAAEwAAAABiEfZBAAAAN0lEQVQ4EWP8//8/Az0AEz0sAdkxahHZIT0adKNBBw+B0cQADwpSGaNBR2qIwdWPBh08KEhlAADg2gMjrZECLQAAAABJRU5ErkJggg=="
          />
          <G
            id="Group_61815"
            data-name="Group 61815"
            transform="translate(20.081 20.094)"
            opacity={0.7}
          >
            <G
              id="Group_61814"
              data-name="Group 61814"
              transform="translate(0)"
            >
              <G
                id="Group_61813"
                data-name="Group 61813"
                clipPath="url(#clip-path-193)"
              >
                <G
                  id="Group_61656"
                  data-name="Group 61656"
                  transform="translate(5.455 0.064)"
                >
                  <G
                    id="Group_61655"
                    data-name="Group 61655"
                    clipPath="url(#clip-path-194)"
                  >
                    <Rect
                      id="Rectangle_8597"
                      data-name="Rectangle 8597"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-3)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61658"
                  data-name="Group 61658"
                  transform="translate(4.364 0.064)"
                >
                  <G
                    id="Group_61657"
                    data-name="Group 61657"
                    clipPath="url(#clip-path-195)"
                  >
                    <Rect
                      id="Rectangle_8598"
                      data-name="Rectangle 8598"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-4)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61660"
                  data-name="Group 61660"
                  transform="translate(4.909 0.367)"
                >
                  <G
                    id="Group_61659"
                    data-name="Group 61659"
                    clipPath="url(#clip-path-196)"
                  >
                    <Rect
                      id="Rectangle_8599"
                      data-name="Rectangle 8599"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-5)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61662"
                  data-name="Group 61662"
                  transform="translate(5.455 0.671)"
                >
                  <G
                    id="Group_61661"
                    data-name="Group 61661"
                    clipPath="url(#clip-path-197)"
                  >
                    <Rect
                      id="Rectangle_8600"
                      data-name="Rectangle 8600"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-6)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61664"
                  data-name="Group 61664"
                  transform="translate(3.273 0.064)"
                >
                  <G
                    id="Group_61663"
                    data-name="Group 61663"
                    clipPath="url(#clip-path-198)"
                  >
                    <Rect
                      id="Rectangle_8601"
                      data-name="Rectangle 8601"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-7)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61666"
                  data-name="Group 61666"
                  transform="translate(3.818 0.367)"
                >
                  <G
                    id="Group_61665"
                    data-name="Group 61665"
                    clipPath="url(#clip-path-199)"
                  >
                    <Rect
                      id="Rectangle_8602"
                      data-name="Rectangle 8602"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-8)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61668"
                  data-name="Group 61668"
                  transform="translate(4.364 0.671)"
                >
                  <G
                    id="Group_61667"
                    data-name="Group 61667"
                    clipPath="url(#clip-path-200)"
                  >
                    <Rect
                      id="Rectangle_8603"
                      data-name="Rectangle 8603"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-9)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61670"
                  data-name="Group 61670"
                  transform="translate(4.909 0.974)"
                >
                  <G
                    id="Group_61669"
                    data-name="Group 61669"
                    clipPath="url(#clip-path-201)"
                  >
                    <Rect
                      id="Rectangle_8604"
                      data-name="Rectangle 8604"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-10)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61672"
                  data-name="Group 61672"
                  transform="translate(5.455 1.278)"
                >
                  <G
                    id="Group_61671"
                    data-name="Group 61671"
                    clipPath="url(#clip-path-202)"
                  >
                    <Rect
                      id="Rectangle_8605"
                      data-name="Rectangle 8605"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-11)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61674"
                  data-name="Group 61674"
                  transform="translate(2.182 0.064)"
                >
                  <G
                    id="Group_61673"
                    data-name="Group 61673"
                    clipPath="url(#clip-path-203)"
                  >
                    <Rect
                      id="Rectangle_8606"
                      data-name="Rectangle 8606"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-12)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61676"
                  data-name="Group 61676"
                  transform="translate(2.728 0.367)"
                >
                  <G
                    id="Group_61675"
                    data-name="Group 61675"
                    clipPath="url(#clip-path-204)"
                  >
                    <Rect
                      id="Rectangle_8607"
                      data-name="Rectangle 8607"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-13)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61678"
                  data-name="Group 61678"
                  transform="translate(3.273 0.671)"
                >
                  <G
                    id="Group_61677"
                    data-name="Group 61677"
                    clipPath="url(#clip-path-205)"
                  >
                    <Rect
                      id="Rectangle_8608"
                      data-name="Rectangle 8608"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-14)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61680"
                  data-name="Group 61680"
                  transform="translate(3.818 0.974)"
                >
                  <G
                    id="Group_61679"
                    data-name="Group 61679"
                    clipPath="url(#clip-path-206)"
                  >
                    <Rect
                      id="Rectangle_8609"
                      data-name="Rectangle 8609"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-15)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61682"
                  data-name="Group 61682"
                  transform="translate(4.364 1.278)"
                >
                  <G
                    id="Group_61681"
                    data-name="Group 61681"
                    clipPath="url(#clip-path-207)"
                  >
                    <Rect
                      id="Rectangle_8610"
                      data-name="Rectangle 8610"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-16)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61684"
                  data-name="Group 61684"
                  transform="translate(4.909 1.582)"
                >
                  <G
                    id="Group_61683"
                    data-name="Group 61683"
                    clipPath="url(#clip-path-208)"
                  >
                    <Rect
                      id="Rectangle_8611"
                      data-name="Rectangle 8611"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-17)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61686"
                  data-name="Group 61686"
                  transform="translate(5.455 1.885)"
                >
                  <G
                    id="Group_61685"
                    data-name="Group 61685"
                    clipPath="url(#clip-path-209)"
                  >
                    <Rect
                      id="Rectangle_8612"
                      data-name="Rectangle 8612"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-18)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61688"
                  data-name="Group 61688"
                  transform="translate(1.091 0.064)"
                >
                  <G
                    id="Group_61687"
                    data-name="Group 61687"
                    clipPath="url(#clip-path-210)"
                  >
                    <Rect
                      id="Rectangle_8613"
                      data-name="Rectangle 8613"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-19)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61690"
                  data-name="Group 61690"
                  transform="translate(1.637 0.367)"
                >
                  <G
                    id="Group_61689"
                    data-name="Group 61689"
                    clipPath="url(#clip-path-211)"
                  >
                    <Rect
                      id="Rectangle_8614"
                      data-name="Rectangle 8614"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-20)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61692"
                  data-name="Group 61692"
                  transform="translate(2.182 0.671)"
                >
                  <G
                    id="Group_61691"
                    data-name="Group 61691"
                    clipPath="url(#clip-path-212)"
                  >
                    <Rect
                      id="Rectangle_8615"
                      data-name="Rectangle 8615"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-21)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61694"
                  data-name="Group 61694"
                  transform="translate(2.728 0.974)"
                >
                  <G
                    id="Group_61693"
                    data-name="Group 61693"
                    clipPath="url(#clip-path-213)"
                  >
                    <Rect
                      id="Rectangle_8616"
                      data-name="Rectangle 8616"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-22)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61696"
                  data-name="Group 61696"
                  transform="translate(3.273 1.278)"
                >
                  <G
                    id="Group_61695"
                    data-name="Group 61695"
                    clipPath="url(#clip-path-214)"
                  >
                    <Rect
                      id="Rectangle_8617"
                      data-name="Rectangle 8617"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-23)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61698"
                  data-name="Group 61698"
                  transform="translate(3.818 1.582)"
                >
                  <G
                    id="Group_61697"
                    data-name="Group 61697"
                    clipPath="url(#clip-path-215)"
                  >
                    <Rect
                      id="Rectangle_8618"
                      data-name="Rectangle 8618"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-24)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61700"
                  data-name="Group 61700"
                  transform="translate(4.364 1.885)"
                >
                  <G
                    id="Group_61699"
                    data-name="Group 61699"
                    clipPath="url(#clip-path-216)"
                  >
                    <Rect
                      id="Rectangle_8619"
                      data-name="Rectangle 8619"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-25)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61702"
                  data-name="Group 61702"
                  transform="translate(4.91 2.189)"
                >
                  <G
                    id="Group_61701"
                    data-name="Group 61701"
                    clipPath="url(#clip-path-217)"
                  >
                    <Rect
                      id="Rectangle_8620"
                      data-name="Rectangle 8620"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-26)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61704"
                  data-name="Group 61704"
                  transform="translate(5.455 2.492)"
                >
                  <G
                    id="Group_61703"
                    data-name="Group 61703"
                    clipPath="url(#clip-path-218)"
                  >
                    <Rect
                      id="Rectangle_8621"
                      data-name="Rectangle 8621"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-27)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61706"
                  data-name="Group 61706"
                  transform="translate(0 0.064)"
                >
                  <G
                    id="Group_61705"
                    data-name="Group 61705"
                    clipPath="url(#clip-path-219)"
                  >
                    <Rect
                      id="Rectangle_8622"
                      data-name="Rectangle 8622"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-28)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61708"
                  data-name="Group 61708"
                  transform="translate(0.546 0.367)"
                >
                  <G
                    id="Group_61707"
                    data-name="Group 61707"
                    clipPath="url(#clip-path-220)"
                  >
                    <Rect
                      id="Rectangle_8623"
                      data-name="Rectangle 8623"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-29)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61710"
                  data-name="Group 61710"
                  transform="translate(1.091 0.671)"
                >
                  <G
                    id="Group_61709"
                    data-name="Group 61709"
                    clipPath="url(#clip-path-221)"
                  >
                    <Rect
                      id="Rectangle_8624"
                      data-name="Rectangle 8624"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-30)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61712"
                  data-name="Group 61712"
                  transform="translate(1.637 0.974)"
                >
                  <G
                    id="Group_61711"
                    data-name="Group 61711"
                    clipPath="url(#clip-path-222)"
                  >
                    <Rect
                      id="Rectangle_8625"
                      data-name="Rectangle 8625"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-31)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61714"
                  data-name="Group 61714"
                  transform="translate(2.182 1.278)"
                >
                  <G
                    id="Group_61713"
                    data-name="Group 61713"
                    clipPath="url(#clip-path-223)"
                  >
                    <Rect
                      id="Rectangle_8626"
                      data-name="Rectangle 8626"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-32)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61716"
                  data-name="Group 61716"
                  transform="translate(2.728 1.582)"
                >
                  <G
                    id="Group_61715"
                    data-name="Group 61715"
                    clipPath="url(#clip-path-224)"
                  >
                    <Rect
                      id="Rectangle_8627"
                      data-name="Rectangle 8627"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-33)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61718"
                  data-name="Group 61718"
                  transform="translate(3.273 1.885)"
                >
                  <G
                    id="Group_61717"
                    data-name="Group 61717"
                    clipPath="url(#clip-path-225)"
                  >
                    <Rect
                      id="Rectangle_8628"
                      data-name="Rectangle 8628"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-34)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61720"
                  data-name="Group 61720"
                  transform="translate(3.818 2.189)"
                >
                  <G
                    id="Group_61719"
                    data-name="Group 61719"
                    clipPath="url(#clip-path-226)"
                  >
                    <Rect
                      id="Rectangle_8629"
                      data-name="Rectangle 8629"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-35)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61722"
                  data-name="Group 61722"
                  transform="translate(4.364 2.492)"
                >
                  <G
                    id="Group_61721"
                    data-name="Group 61721"
                    clipPath="url(#clip-path-227)"
                  >
                    <Rect
                      id="Rectangle_8630"
                      data-name="Rectangle 8630"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-36)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61724"
                  data-name="Group 61724"
                  transform="translate(4.909 2.796)"
                >
                  <G
                    id="Group_61723"
                    data-name="Group 61723"
                    clipPath="url(#clip-path-228)"
                  >
                    <Rect
                      id="Rectangle_8631"
                      data-name="Rectangle 8631"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-37)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61726"
                  data-name="Group 61726"
                  transform="translate(5.455 3.099)"
                >
                  <G
                    id="Group_61725"
                    data-name="Group 61725"
                    clipPath="url(#clip-path-229)"
                  >
                    <Rect
                      id="Rectangle_8632"
                      data-name="Rectangle 8632"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-38)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61728"
                  data-name="Group 61728"
                  transform="translate(0 0.671)"
                >
                  <G
                    id="Group_61727"
                    data-name="Group 61727"
                    clipPath="url(#clip-path-230)"
                  >
                    <Rect
                      id="Rectangle_8633"
                      data-name="Rectangle 8633"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-39)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61730"
                  data-name="Group 61730"
                  transform="translate(0.546 0.974)"
                >
                  <G
                    id="Group_61729"
                    data-name="Group 61729"
                    clipPath="url(#clip-path-231)"
                  >
                    <Rect
                      id="Rectangle_8634"
                      data-name="Rectangle 8634"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-40)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61732"
                  data-name="Group 61732"
                  transform="translate(1.091 1.278)"
                >
                  <G
                    id="Group_61731"
                    data-name="Group 61731"
                    clipPath="url(#clip-path-232)"
                  >
                    <Rect
                      id="Rectangle_8635"
                      data-name="Rectangle 8635"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-41)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61734"
                  data-name="Group 61734"
                  transform="translate(1.637 1.582)"
                >
                  <G
                    id="Group_61733"
                    data-name="Group 61733"
                    clipPath="url(#clip-path-233)"
                  >
                    <Rect
                      id="Rectangle_8636"
                      data-name="Rectangle 8636"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-42)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61736"
                  data-name="Group 61736"
                  transform="translate(2.182 1.885)"
                >
                  <G
                    id="Group_61735"
                    data-name="Group 61735"
                    clipPath="url(#clip-path-234)"
                  >
                    <Rect
                      id="Rectangle_8637"
                      data-name="Rectangle 8637"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-43)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61738"
                  data-name="Group 61738"
                  transform="translate(2.728 2.189)"
                >
                  <G
                    id="Group_61737"
                    data-name="Group 61737"
                    clipPath="url(#clip-path-235)"
                  >
                    <Rect
                      id="Rectangle_8638"
                      data-name="Rectangle 8638"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-44)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61740"
                  data-name="Group 61740"
                  transform="translate(3.273 2.492)"
                >
                  <G
                    id="Group_61739"
                    data-name="Group 61739"
                    clipPath="url(#clip-path-236)"
                  >
                    <Rect
                      id="Rectangle_8639"
                      data-name="Rectangle 8639"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-45)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61742"
                  data-name="Group 61742"
                  transform="translate(3.819 2.796)"
                >
                  <G
                    id="Group_61741"
                    data-name="Group 61741"
                    clipPath="url(#clip-path-237)"
                  >
                    <Rect
                      id="Rectangle_8640"
                      data-name="Rectangle 8640"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-46)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61744"
                  data-name="Group 61744"
                  transform="translate(4.364 3.099)"
                >
                  <G
                    id="Group_61743"
                    data-name="Group 61743"
                    clipPath="url(#clip-path-238)"
                  >
                    <Rect
                      id="Rectangle_8641"
                      data-name="Rectangle 8641"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-47)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61746"
                  data-name="Group 61746"
                  transform="translate(4.909 3.403)"
                >
                  <G
                    id="Group_61745"
                    data-name="Group 61745"
                    clipPath="url(#clip-path-239)"
                  >
                    <Rect
                      id="Rectangle_8642"
                      data-name="Rectangle 8642"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-48)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61748"
                  data-name="Group 61748"
                  transform="translate(5.455 3.706)"
                >
                  <G
                    id="Group_61747"
                    data-name="Group 61747"
                    clipPath="url(#clip-path-240)"
                  >
                    <Rect
                      id="Rectangle_8643"
                      data-name="Rectangle 8643"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-49)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61750"
                  data-name="Group 61750"
                  transform="translate(0 1.278)"
                >
                  <G
                    id="Group_61749"
                    data-name="Group 61749"
                    clipPath="url(#clip-path-241)"
                  >
                    <Rect
                      id="Rectangle_8644"
                      data-name="Rectangle 8644"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-50)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61752"
                  data-name="Group 61752"
                  transform="translate(0.546 1.582)"
                >
                  <G
                    id="Group_61751"
                    data-name="Group 61751"
                    clipPath="url(#clip-path-242)"
                  >
                    <Rect
                      id="Rectangle_8645"
                      data-name="Rectangle 8645"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-51)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61754"
                  data-name="Group 61754"
                  transform="translate(1.091 1.885)"
                >
                  <G
                    id="Group_61753"
                    data-name="Group 61753"
                    clipPath="url(#clip-path-243)"
                  >
                    <Rect
                      id="Rectangle_8646"
                      data-name="Rectangle 8646"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-52)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61756"
                  data-name="Group 61756"
                  transform="translate(1.637 2.189)"
                >
                  <G
                    id="Group_61755"
                    data-name="Group 61755"
                    clipPath="url(#clip-path-244)"
                  >
                    <Rect
                      id="Rectangle_8647"
                      data-name="Rectangle 8647"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-53)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61758"
                  data-name="Group 61758"
                  transform="translate(2.182 2.492)"
                >
                  <G
                    id="Group_61757"
                    data-name="Group 61757"
                    clipPath="url(#clip-path-245)"
                  >
                    <Rect
                      id="Rectangle_8648"
                      data-name="Rectangle 8648"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-54)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61760"
                  data-name="Group 61760"
                  transform="translate(2.728 2.796)"
                >
                  <G
                    id="Group_61759"
                    data-name="Group 61759"
                    clipPath="url(#clip-path-246)"
                  >
                    <Rect
                      id="Rectangle_8649"
                      data-name="Rectangle 8649"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-55)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61762"
                  data-name="Group 61762"
                  transform="translate(3.273 3.099)"
                >
                  <G
                    id="Group_61761"
                    data-name="Group 61761"
                    clipPath="url(#clip-path-247)"
                  >
                    <Rect
                      id="Rectangle_8650"
                      data-name="Rectangle 8650"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-56)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61764"
                  data-name="Group 61764"
                  transform="translate(3.819 3.403)"
                >
                  <G
                    id="Group_61763"
                    data-name="Group 61763"
                    clipPath="url(#clip-path-248)"
                  >
                    <Rect
                      id="Rectangle_8651"
                      data-name="Rectangle 8651"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-57)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61766"
                  data-name="Group 61766"
                  transform="translate(4.364 3.706)"
                >
                  <G
                    id="Group_61765"
                    data-name="Group 61765"
                    clipPath="url(#clip-path-249)"
                  >
                    <Rect
                      id="Rectangle_8652"
                      data-name="Rectangle 8652"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-58)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61768"
                  data-name="Group 61768"
                  transform="translate(0 1.885)"
                >
                  <G
                    id="Group_61767"
                    data-name="Group 61767"
                    clipPath="url(#clip-path-250)"
                  >
                    <Rect
                      id="Rectangle_8653"
                      data-name="Rectangle 8653"
                      width={1.131}
                      height={0.629}
                      fill="url(#radial-gradient-59)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61770"
                  data-name="Group 61770"
                  transform="translate(0.546 2.189)"
                >
                  <G
                    id="Group_61769"
                    data-name="Group 61769"
                    clipPath="url(#clip-path-251)"
                  >
                    <Rect
                      id="Rectangle_8654"
                      data-name="Rectangle 8654"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-60)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61772"
                  data-name="Group 61772"
                  transform="translate(1.091 2.492)"
                >
                  <G
                    id="Group_61771"
                    data-name="Group 61771"
                    clipPath="url(#clip-path-252)"
                  >
                    <Rect
                      id="Rectangle_8655"
                      data-name="Rectangle 8655"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-61)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61774"
                  data-name="Group 61774"
                  transform="translate(1.637 2.796)"
                >
                  <G
                    id="Group_61773"
                    data-name="Group 61773"
                    clipPath="url(#clip-path-253)"
                  >
                    <Rect
                      id="Rectangle_8656"
                      data-name="Rectangle 8656"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-62)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61776"
                  data-name="Group 61776"
                  transform="translate(2.182 3.099)"
                >
                  <G
                    id="Group_61775"
                    data-name="Group 61775"
                    clipPath="url(#clip-path-254)"
                  >
                    <Rect
                      id="Rectangle_8657"
                      data-name="Rectangle 8657"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-63)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61778"
                  data-name="Group 61778"
                  transform="translate(2.728 3.403)"
                >
                  <G
                    id="Group_61777"
                    data-name="Group 61777"
                    clipPath="url(#clip-path-255)"
                  >
                    <Rect
                      id="Rectangle_8658"
                      data-name="Rectangle 8658"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-64)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61780"
                  data-name="Group 61780"
                  transform="translate(3.273 3.706)"
                >
                  <G
                    id="Group_61779"
                    data-name="Group 61779"
                    clipPath="url(#clip-path-256)"
                  >
                    <Rect
                      id="Rectangle_8659"
                      data-name="Rectangle 8659"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-65)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61782"
                  data-name="Group 61782"
                  transform="translate(0 2.492)"
                >
                  <G
                    id="Group_61781"
                    data-name="Group 61781"
                    clipPath="url(#clip-path-257)"
                  >
                    <Rect
                      id="Rectangle_8660"
                      data-name="Rectangle 8660"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-66)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61784"
                  data-name="Group 61784"
                  transform="translate(0.546 2.796)"
                >
                  <G
                    id="Group_61783"
                    data-name="Group 61783"
                    clipPath="url(#clip-path-258)"
                  >
                    <Rect
                      id="Rectangle_8661"
                      data-name="Rectangle 8661"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-67)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61786"
                  data-name="Group 61786"
                  transform="translate(1.091 3.099)"
                >
                  <G
                    id="Group_61785"
                    data-name="Group 61785"
                    clipPath="url(#clip-path-259)"
                  >
                    <Rect
                      id="Rectangle_8662"
                      data-name="Rectangle 8662"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-68)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61788"
                  data-name="Group 61788"
                  transform="translate(1.637 3.403)"
                >
                  <G
                    id="Group_61787"
                    data-name="Group 61787"
                    clipPath="url(#clip-path-260)"
                  >
                    <Rect
                      id="Rectangle_8663"
                      data-name="Rectangle 8663"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-69)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61790"
                  data-name="Group 61790"
                  transform="translate(2.182 3.706)"
                >
                  <G
                    id="Group_61789"
                    data-name="Group 61789"
                    clipPath="url(#clip-path-261)"
                  >
                    <Rect
                      id="Rectangle_8664"
                      data-name="Rectangle 8664"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-70)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61792"
                  data-name="Group 61792"
                  transform="translate(0 3.099)"
                >
                  <G
                    id="Group_61791"
                    data-name="Group 61791"
                    clipPath="url(#clip-path-262)"
                  >
                    <Rect
                      id="Rectangle_8665"
                      data-name="Rectangle 8665"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-71)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61794"
                  data-name="Group 61794"
                  transform="translate(0.546 3.403)"
                >
                  <G
                    id="Group_61793"
                    data-name="Group 61793"
                    clipPath="url(#clip-path-263)"
                  >
                    <Rect
                      id="Rectangle_8666"
                      data-name="Rectangle 8666"
                      width={1.131}
                      height={0.629}
                      transform="translate(0)"
                      fill="url(#radial-gradient-72)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61796"
                  data-name="Group 61796"
                  transform="translate(1.091 3.706)"
                >
                  <G
                    id="Group_61795"
                    data-name="Group 61795"
                    clipPath="url(#clip-path-264)"
                  >
                    <Rect
                      id="Rectangle_8667"
                      data-name="Rectangle 8667"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-73)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61798"
                  data-name="Group 61798"
                  transform="translate(0 3.706)"
                >
                  <G
                    id="Group_61797"
                    data-name="Group 61797"
                    clipPath="url(#clip-path-265)"
                  >
                    <Rect
                      id="Rectangle_8668"
                      data-name="Rectangle 8668"
                      width={1.131}
                      height={0.629}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-74)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61800"
                  data-name="Group 61800"
                  transform="translate(2.67 1.821)"
                >
                  <G
                    id="Group_61799"
                    data-name="Group 61799"
                    clipPath="url(#clip-path-266)"
                  >
                    <Rect
                      id="Rectangle_8669"
                      data-name="Rectangle 8669"
                      width={0.155}
                      height={0.15}
                      fill="url(#radial-gradient-75)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61802"
                  data-name="Group 61802"
                  transform="translate(2.67 0)"
                >
                  <G
                    id="Group_61801"
                    data-name="Group 61801"
                    clipPath="url(#clip-path-267)"
                  >
                    <Rect
                      id="Rectangle_8670"
                      data-name="Rectangle 8670"
                      width={0.155}
                      height={0.15}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-76)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61804"
                  data-name="Group 61804"
                  transform="translate(1.579 3.642)"
                >
                  <G
                    id="Group_61803"
                    data-name="Group 61803"
                    clipPath="url(#clip-path-268)"
                  >
                    <Rect
                      id="Rectangle_8671"
                      data-name="Rectangle 8671"
                      width={0.155}
                      height={0.15}
                      transform="translate(0)"
                      fill="url(#radial-gradient-77)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61806"
                  data-name="Group 61806"
                  transform="translate(4.852 4.25)"
                >
                  <G
                    id="Group_61805"
                    data-name="Group 61805"
                    clipPath="url(#clip-path-269)"
                  >
                    <Rect
                      id="Rectangle_8672"
                      data-name="Rectangle 8672"
                      width={0.155}
                      height={0.15}
                      fill="url(#radial-gradient-78)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61808"
                  data-name="Group 61808"
                  transform="translate(5.397 2.732)"
                >
                  <G
                    id="Group_61807"
                    data-name="Group 61807"
                    clipPath="url(#clip-path-270)"
                  >
                    <Rect
                      id="Rectangle_8673"
                      data-name="Rectangle 8673"
                      width={0.155}
                      height={0.15}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-79)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61810"
                  data-name="Group 61810"
                  transform="translate(4.307 3.339)"
                >
                  <G
                    id="Group_61809"
                    data-name="Group 61809"
                    clipPath="url(#clip-path-271)"
                  >
                    <Rect
                      id="Rectangle_8674"
                      data-name="Rectangle 8674"
                      width={0.155}
                      height={0.15}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-80)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61812"
                  data-name="Group 61812"
                  transform="translate(1.033 0.911)"
                >
                  <G
                    id="Group_61811"
                    data-name="Group 61811"
                    clipPath="url(#clip-path-272)"
                  >
                    <Rect
                      id="Rectangle_8675"
                      data-name="Rectangle 8675"
                      width={0.155}
                      height={0.15}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-81)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61819"
        data-name="Group 61819"
        transform="translate(34.242 30.658)"
      >
        <G
          id="Group_61818"
          data-name="Group 61818"
          clipPath="url(#clip-path-273)"
        >
          <Rect
            id="Rectangle_8678"
            data-name="Rectangle 8678"
            width={6.503}
            height={5.147}
            transform="translate(-1.188 0.509) rotate(-24.015)"
            fill="url(#linear-gradient-105)"
          />
        </G>
      </G>
      <G
        id="Group_61982"
        data-name="Group 61982"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61981"
          data-name="Group 61981"
          clipPath="url(#clip-path-73)"
        >
          <Image
            id="Rectangle_8679"
            data-name="Rectangle 8679"
            width={3.354}
            height={1.956}
            transform="translate(20.149 22.456)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAYAAAA8sqwkAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAABwAAAABHFOl2AAAAF0lEQVQYGWP8//8/AymAiRTFILUjUgMABfUDC+4T3F8AAAAASUVORK5CYII="
          />
          <G
            id="Group_61980"
            data-name="Group 61980"
            transform="translate(14.861 17.26)"
            opacity={0.7}
          >
            <G id="Group_61979" data-name="Group 61979">
              <G
                id="Group_61978"
                data-name="Group 61978"
                clipPath="url(#clip-path-275)"
              >
                <G
                  id="Group_61821"
                  data-name="Group 61821"
                  transform="translate(4.473 0.052)"
                >
                  <G
                    id="Group_61820"
                    data-name="Group 61820"
                    clipPath="url(#clip-path-276)"
                  >
                    <Rect
                      id="Rectangle_8680"
                      data-name="Rectangle 8680"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-82)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61823"
                  data-name="Group 61823"
                  transform="translate(3.578 0.052)"
                >
                  <G
                    id="Group_61822"
                    data-name="Group 61822"
                    clipPath="url(#clip-path-277)"
                  >
                    <Rect
                      id="Rectangle_8681"
                      data-name="Rectangle 8681"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-83)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61825"
                  data-name="Group 61825"
                  transform="translate(4.025 0.301)"
                >
                  <G
                    id="Group_61824"
                    data-name="Group 61824"
                    clipPath="url(#clip-path-278)"
                  >
                    <Rect
                      id="Rectangle_8682"
                      data-name="Rectangle 8682"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-84)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61827"
                  data-name="Group 61827"
                  transform="translate(4.473 0.55)"
                >
                  <G
                    id="Group_61826"
                    data-name="Group 61826"
                    clipPath="url(#clip-path-279)"
                  >
                    <Rect
                      id="Rectangle_8683"
                      data-name="Rectangle 8683"
                      width={0.928}
                      height={0.516}
                      transform="translate(0)"
                      fill="url(#radial-gradient-85)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61829"
                  data-name="Group 61829"
                  transform="translate(2.684 0.052)"
                >
                  <G
                    id="Group_61828"
                    data-name="Group 61828"
                    clipPath="url(#clip-path-280)"
                  >
                    <Rect
                      id="Rectangle_8684"
                      data-name="Rectangle 8684"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-86)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61831"
                  data-name="Group 61831"
                  transform="translate(3.131 0.301)"
                >
                  <G
                    id="Group_61830"
                    data-name="Group 61830"
                    clipPath="url(#clip-path-281)"
                  >
                    <Rect
                      id="Rectangle_8685"
                      data-name="Rectangle 8685"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-87)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61833"
                  data-name="Group 61833"
                  transform="translate(3.578 0.55)"
                >
                  <G
                    id="Group_61832"
                    data-name="Group 61832"
                    clipPath="url(#clip-path-282)"
                  >
                    <Rect
                      id="Rectangle_8686"
                      data-name="Rectangle 8686"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-88)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61835"
                  data-name="Group 61835"
                  transform="translate(4.025 0.799)"
                >
                  <G
                    id="Group_61834"
                    data-name="Group 61834"
                    clipPath="url(#clip-path-283)"
                  >
                    <Rect
                      id="Rectangle_8687"
                      data-name="Rectangle 8687"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-89)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61837"
                  data-name="Group 61837"
                  transform="translate(4.473 1.048)"
                >
                  <G
                    id="Group_61836"
                    data-name="Group 61836"
                    clipPath="url(#clip-path-284)"
                  >
                    <Rect
                      id="Rectangle_8688"
                      data-name="Rectangle 8688"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-90)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61839"
                  data-name="Group 61839"
                  transform="translate(1.789 0.052)"
                >
                  <G
                    id="Group_61838"
                    data-name="Group 61838"
                    clipPath="url(#clip-path-285)"
                  >
                    <Rect
                      id="Rectangle_8689"
                      data-name="Rectangle 8689"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-91)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61841"
                  data-name="Group 61841"
                  transform="translate(2.236 0.301)"
                >
                  <G
                    id="Group_61840"
                    data-name="Group 61840"
                    clipPath="url(#clip-path-286)"
                  >
                    <Rect
                      id="Rectangle_8690"
                      data-name="Rectangle 8690"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-92)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61843"
                  data-name="Group 61843"
                  transform="translate(2.684 0.55)"
                >
                  <G
                    id="Group_61842"
                    data-name="Group 61842"
                    clipPath="url(#clip-path-287)"
                  >
                    <Rect
                      id="Rectangle_8691"
                      data-name="Rectangle 8691"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-93)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61845"
                  data-name="Group 61845"
                  transform="translate(3.131 0.799)"
                >
                  <G
                    id="Group_61844"
                    data-name="Group 61844"
                    clipPath="url(#clip-path-288)"
                  >
                    <Rect
                      id="Rectangle_8692"
                      data-name="Rectangle 8692"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-94)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61847"
                  data-name="Group 61847"
                  transform="translate(3.578 1.048)"
                >
                  <G
                    id="Group_61846"
                    data-name="Group 61846"
                    clipPath="url(#clip-path-289)"
                  >
                    <Rect
                      id="Rectangle_8693"
                      data-name="Rectangle 8693"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-95)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61849"
                  data-name="Group 61849"
                  transform="translate(4.025 1.297)"
                >
                  <G
                    id="Group_61848"
                    data-name="Group 61848"
                    clipPath="url(#clip-path-290)"
                  >
                    <Rect
                      id="Rectangle_8694"
                      data-name="Rectangle 8694"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-96)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61851"
                  data-name="Group 61851"
                  transform="translate(4.473 1.545)"
                >
                  <G
                    id="Group_61850"
                    data-name="Group 61850"
                    clipPath="url(#clip-path-291)"
                  >
                    <Rect
                      id="Rectangle_8695"
                      data-name="Rectangle 8695"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-97)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61853"
                  data-name="Group 61853"
                  transform="translate(0.895 0.052)"
                >
                  <G
                    id="Group_61852"
                    data-name="Group 61852"
                    clipPath="url(#clip-path-292)"
                  >
                    <Rect
                      id="Rectangle_8696"
                      data-name="Rectangle 8696"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-98)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61855"
                  data-name="Group 61855"
                  transform="translate(1.342 0.301)"
                >
                  <G
                    id="Group_61854"
                    data-name="Group 61854"
                    clipPath="url(#clip-path-293)"
                  >
                    <Rect
                      id="Rectangle_8697"
                      data-name="Rectangle 8697"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-99)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61857"
                  data-name="Group 61857"
                  transform="translate(1.789 0.55)"
                >
                  <G
                    id="Group_61856"
                    data-name="Group 61856"
                    clipPath="url(#clip-path-294)"
                  >
                    <Rect
                      id="Rectangle_8698"
                      data-name="Rectangle 8698"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-100)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61859"
                  data-name="Group 61859"
                  transform="translate(2.236 0.799)"
                >
                  <G
                    id="Group_61858"
                    data-name="Group 61858"
                    clipPath="url(#clip-path-295)"
                  >
                    <Rect
                      id="Rectangle_8699"
                      data-name="Rectangle 8699"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-101)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61861"
                  data-name="Group 61861"
                  transform="translate(2.684 1.048)"
                >
                  <G
                    id="Group_61860"
                    data-name="Group 61860"
                    clipPath="url(#clip-path-296)"
                  >
                    <Rect
                      id="Rectangle_8700"
                      data-name="Rectangle 8700"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-102)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61863"
                  data-name="Group 61863"
                  transform="translate(3.131 1.297)"
                >
                  <G
                    id="Group_61862"
                    data-name="Group 61862"
                    clipPath="url(#clip-path-297)"
                  >
                    <Rect
                      id="Rectangle_8701"
                      data-name="Rectangle 8701"
                      width={0.928}
                      height={0.516}
                      fill="url(#radial-gradient-103)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61865"
                  data-name="Group 61865"
                  transform="translate(3.578 1.545)"
                >
                  <G
                    id="Group_61864"
                    data-name="Group 61864"
                    clipPath="url(#clip-path-298)"
                  >
                    <Rect
                      id="Rectangle_8702"
                      data-name="Rectangle 8702"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-104)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61867"
                  data-name="Group 61867"
                  transform="translate(4.025 1.794)"
                >
                  <G
                    id="Group_61866"
                    data-name="Group 61866"
                    clipPath="url(#clip-path-299)"
                  >
                    <Rect
                      id="Rectangle_8703"
                      data-name="Rectangle 8703"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-105)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61869"
                  data-name="Group 61869"
                  transform="translate(4.473 2.043)"
                >
                  <G
                    id="Group_61868"
                    data-name="Group 61868"
                    clipPath="url(#clip-path-300)"
                  >
                    <Rect
                      id="Rectangle_8704"
                      data-name="Rectangle 8704"
                      width={0.928}
                      height={0.516}
                      transform="translate(0)"
                      fill="url(#radial-gradient-106)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61871"
                  data-name="Group 61871"
                  transform="translate(0 0.052)"
                >
                  <G
                    id="Group_61870"
                    data-name="Group 61870"
                    clipPath="url(#clip-path-301)"
                  >
                    <Rect
                      id="Rectangle_8705"
                      data-name="Rectangle 8705"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-107)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61873"
                  data-name="Group 61873"
                  transform="translate(0.447 0.301)"
                >
                  <G
                    id="Group_61872"
                    data-name="Group 61872"
                    clipPath="url(#clip-path-302)"
                  >
                    <Rect
                      id="Rectangle_8706"
                      data-name="Rectangle 8706"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-108)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61875"
                  data-name="Group 61875"
                  transform="translate(0.895 0.55)"
                >
                  <G
                    id="Group_61874"
                    data-name="Group 61874"
                    clipPath="url(#clip-path-303)"
                  >
                    <Rect
                      id="Rectangle_8707"
                      data-name="Rectangle 8707"
                      width={0.927}
                      height={0.516}
                      transform="translate(0)"
                      fill="url(#radial-gradient-109)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61877"
                  data-name="Group 61877"
                  transform="translate(1.342 0.799)"
                >
                  <G
                    id="Group_61876"
                    data-name="Group 61876"
                    clipPath="url(#clip-path-304)"
                  >
                    <Rect
                      id="Rectangle_8708"
                      data-name="Rectangle 8708"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-110)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61879"
                  data-name="Group 61879"
                  transform="translate(1.789 1.048)"
                >
                  <G
                    id="Group_61878"
                    data-name="Group 61878"
                    clipPath="url(#clip-path-305)"
                  >
                    <Rect
                      id="Rectangle_8709"
                      data-name="Rectangle 8709"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-111)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61881"
                  data-name="Group 61881"
                  transform="translate(2.236 1.297)"
                >
                  <G
                    id="Group_61880"
                    data-name="Group 61880"
                    clipPath="url(#clip-path-306)"
                  >
                    <Rect
                      id="Rectangle_8710"
                      data-name="Rectangle 8710"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-112)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61883"
                  data-name="Group 61883"
                  transform="translate(2.684 1.545)"
                >
                  <G
                    id="Group_61882"
                    data-name="Group 61882"
                    clipPath="url(#clip-path-307)"
                  >
                    <Rect
                      id="Rectangle_8711"
                      data-name="Rectangle 8711"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-113)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61885"
                  data-name="Group 61885"
                  transform="translate(3.131 1.794)"
                >
                  <G
                    id="Group_61884"
                    data-name="Group 61884"
                    clipPath="url(#clip-path-308)"
                  >
                    <Rect
                      id="Rectangle_8712"
                      data-name="Rectangle 8712"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-114)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61887"
                  data-name="Group 61887"
                  transform="translate(3.578 2.043)"
                >
                  <G
                    id="Group_61886"
                    data-name="Group 61886"
                    clipPath="url(#clip-path-309)"
                  >
                    <Rect
                      id="Rectangle_8713"
                      data-name="Rectangle 8713"
                      width={0.927}
                      height={0.516}
                      fill="url(#radial-gradient-115)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61889"
                  data-name="Group 61889"
                  transform="translate(4.025 2.292)"
                >
                  <G
                    id="Group_61888"
                    data-name="Group 61888"
                    clipPath="url(#clip-path-310)"
                  >
                    <Rect
                      id="Rectangle_8714"
                      data-name="Rectangle 8714"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-116)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61891"
                  data-name="Group 61891"
                  transform="translate(4.473 2.541)"
                >
                  <G
                    id="Group_61890"
                    data-name="Group 61890"
                    clipPath="url(#clip-path-311)"
                  >
                    <Rect
                      id="Rectangle_8715"
                      data-name="Rectangle 8715"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-117)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61893"
                  data-name="Group 61893"
                  transform="translate(0 0.55)"
                >
                  <G
                    id="Group_61892"
                    data-name="Group 61892"
                    clipPath="url(#clip-path-312)"
                  >
                    <Rect
                      id="Rectangle_8716"
                      data-name="Rectangle 8716"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-118)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61895"
                  data-name="Group 61895"
                  transform="translate(0.447 0.799)"
                >
                  <G
                    id="Group_61894"
                    data-name="Group 61894"
                    clipPath="url(#clip-path-313)"
                  >
                    <Rect
                      id="Rectangle_8717"
                      data-name="Rectangle 8717"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-119)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61897"
                  data-name="Group 61897"
                  transform="translate(0.895 1.048)"
                >
                  <G
                    id="Group_61896"
                    data-name="Group 61896"
                    clipPath="url(#clip-path-314)"
                  >
                    <Rect
                      id="Rectangle_8718"
                      data-name="Rectangle 8718"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-120)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61899"
                  data-name="Group 61899"
                  transform="translate(1.342 1.297)"
                >
                  <G
                    id="Group_61898"
                    data-name="Group 61898"
                    clipPath="url(#clip-path-315)"
                  >
                    <Rect
                      id="Rectangle_8719"
                      data-name="Rectangle 8719"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-121)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61901"
                  data-name="Group 61901"
                  transform="translate(1.789 1.545)"
                >
                  <G
                    id="Group_61900"
                    data-name="Group 61900"
                    clipPath="url(#clip-path-316)"
                  >
                    <Rect
                      id="Rectangle_8720"
                      data-name="Rectangle 8720"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-122)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61903"
                  data-name="Group 61903"
                  transform="translate(2.237 1.794)"
                >
                  <G
                    id="Group_61902"
                    data-name="Group 61902"
                    clipPath="url(#clip-path-317)"
                  >
                    <Rect
                      id="Rectangle_8721"
                      data-name="Rectangle 8721"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-123)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61905"
                  data-name="Group 61905"
                  transform="translate(2.684 2.043)"
                >
                  <G
                    id="Group_61904"
                    data-name="Group 61904"
                    clipPath="url(#clip-path-318)"
                  >
                    <Rect
                      id="Rectangle_8722"
                      data-name="Rectangle 8722"
                      width={0.927}
                      height={0.516}
                      transform="translate(0)"
                      fill="url(#radial-gradient-124)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61907"
                  data-name="Group 61907"
                  transform="translate(3.131 2.292)"
                >
                  <G
                    id="Group_61906"
                    data-name="Group 61906"
                    clipPath="url(#clip-path-319)"
                  >
                    <Rect
                      id="Rectangle_8723"
                      data-name="Rectangle 8723"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-125)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61909"
                  data-name="Group 61909"
                  transform="translate(3.578 2.541)"
                >
                  <G
                    id="Group_61908"
                    data-name="Group 61908"
                    clipPath="url(#clip-path-320)"
                  >
                    <Rect
                      id="Rectangle_8724"
                      data-name="Rectangle 8724"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-126)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61911"
                  data-name="Group 61911"
                  transform="translate(4.025 2.79)"
                >
                  <G
                    id="Group_61910"
                    data-name="Group 61910"
                    clipPath="url(#clip-path-321)"
                  >
                    <Rect
                      id="Rectangle_8725"
                      data-name="Rectangle 8725"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-127)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61913"
                  data-name="Group 61913"
                  transform="translate(4.473 3.039)"
                >
                  <G
                    id="Group_61912"
                    data-name="Group 61912"
                    clipPath="url(#clip-path-322)"
                  >
                    <Rect
                      id="Rectangle_8726"
                      data-name="Rectangle 8726"
                      width={0.928}
                      height={0.516}
                      fill="url(#radial-gradient-128)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61915"
                  data-name="Group 61915"
                  transform="translate(0 1.048)"
                >
                  <G
                    id="Group_61914"
                    data-name="Group 61914"
                    clipPath="url(#clip-path-323)"
                  >
                    <Rect
                      id="Rectangle_8727"
                      data-name="Rectangle 8727"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-129)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61917"
                  data-name="Group 61917"
                  transform="translate(0.447 1.297)"
                >
                  <G
                    id="Group_61916"
                    data-name="Group 61916"
                    clipPath="url(#clip-path-324)"
                  >
                    <Rect
                      id="Rectangle_8728"
                      data-name="Rectangle 8728"
                      width={0.927}
                      height={0.516}
                      fill="url(#radial-gradient-130)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61919"
                  data-name="Group 61919"
                  transform="translate(0.895 1.545)"
                >
                  <G
                    id="Group_61918"
                    data-name="Group 61918"
                    clipPath="url(#clip-path-325)"
                  >
                    <Rect
                      id="Rectangle_8729"
                      data-name="Rectangle 8729"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-131)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61921"
                  data-name="Group 61921"
                  transform="translate(1.342 1.794)"
                >
                  <G
                    id="Group_61920"
                    data-name="Group 61920"
                    clipPath="url(#clip-path-326)"
                  >
                    <Rect
                      id="Rectangle_8730"
                      data-name="Rectangle 8730"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-132)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61923"
                  data-name="Group 61923"
                  transform="translate(1.789 2.043)"
                >
                  <G
                    id="Group_61922"
                    data-name="Group 61922"
                    clipPath="url(#clip-path-327)"
                  >
                    <Rect
                      id="Rectangle_8731"
                      data-name="Rectangle 8731"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-133)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61925"
                  data-name="Group 61925"
                  transform="translate(2.237 2.292)"
                >
                  <G
                    id="Group_61924"
                    data-name="Group 61924"
                    clipPath="url(#clip-path-328)"
                  >
                    <Rect
                      id="Rectangle_8732"
                      data-name="Rectangle 8732"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-134)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61927"
                  data-name="Group 61927"
                  transform="translate(2.684 2.541)"
                >
                  <G
                    id="Group_61926"
                    data-name="Group 61926"
                    clipPath="url(#clip-path-329)"
                  >
                    <Rect
                      id="Rectangle_8733"
                      data-name="Rectangle 8733"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-135)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61929"
                  data-name="Group 61929"
                  transform="translate(3.131 2.79)"
                >
                  <G
                    id="Group_61928"
                    data-name="Group 61928"
                    clipPath="url(#clip-path-330)"
                  >
                    <Rect
                      id="Rectangle_8734"
                      data-name="Rectangle 8734"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-136)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61931"
                  data-name="Group 61931"
                  transform="translate(3.578 3.039)"
                >
                  <G
                    id="Group_61930"
                    data-name="Group 61930"
                    clipPath="url(#clip-path-331)"
                  >
                    <Rect
                      id="Rectangle_8735"
                      data-name="Rectangle 8735"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-137)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61933"
                  data-name="Group 61933"
                  transform="translate(0 1.545)"
                >
                  <G
                    id="Group_61932"
                    data-name="Group 61932"
                    clipPath="url(#clip-path-332)"
                  >
                    <Rect
                      id="Rectangle_8736"
                      data-name="Rectangle 8736"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-138)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61935"
                  data-name="Group 61935"
                  transform="translate(0.447 1.794)"
                >
                  <G
                    id="Group_61934"
                    data-name="Group 61934"
                    clipPath="url(#clip-path-333)"
                  >
                    <Rect
                      id="Rectangle_8737"
                      data-name="Rectangle 8737"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-139)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61937"
                  data-name="Group 61937"
                  transform="translate(0.895 2.043)"
                >
                  <G
                    id="Group_61936"
                    data-name="Group 61936"
                    clipPath="url(#clip-path-334)"
                  >
                    <Rect
                      id="Rectangle_8738"
                      data-name="Rectangle 8738"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-140)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61939"
                  data-name="Group 61939"
                  transform="translate(1.342 2.292)"
                >
                  <G
                    id="Group_61938"
                    data-name="Group 61938"
                    clipPath="url(#clip-path-335)"
                  >
                    <Rect
                      id="Rectangle_8739"
                      data-name="Rectangle 8739"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-141)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61941"
                  data-name="Group 61941"
                  transform="translate(1.789 2.541)"
                >
                  <G
                    id="Group_61940"
                    data-name="Group 61940"
                    clipPath="url(#clip-path-336)"
                  >
                    <Rect
                      id="Rectangle_8740"
                      data-name="Rectangle 8740"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-142)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61943"
                  data-name="Group 61943"
                  transform="translate(2.237 2.79)"
                >
                  <G
                    id="Group_61942"
                    data-name="Group 61942"
                    clipPath="url(#clip-path-337)"
                  >
                    <Rect
                      id="Rectangle_8741"
                      data-name="Rectangle 8741"
                      width={0.927}
                      height={0.516}
                      fill="url(#radial-gradient-143)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61945"
                  data-name="Group 61945"
                  transform="translate(2.684 3.039)"
                >
                  <G
                    id="Group_61944"
                    data-name="Group 61944"
                    clipPath="url(#clip-path-338)"
                  >
                    <Rect
                      id="Rectangle_8742"
                      data-name="Rectangle 8742"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-144)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61947"
                  data-name="Group 61947"
                  transform="translate(0 2.043)"
                >
                  <G
                    id="Group_61946"
                    data-name="Group 61946"
                    clipPath="url(#clip-path-339)"
                  >
                    <Rect
                      id="Rectangle_8743"
                      data-name="Rectangle 8743"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-145)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61949"
                  data-name="Group 61949"
                  transform="translate(0.447 2.292)"
                >
                  <G
                    id="Group_61948"
                    data-name="Group 61948"
                    clipPath="url(#clip-path-340)"
                  >
                    <Rect
                      id="Rectangle_8744"
                      data-name="Rectangle 8744"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-146)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61951"
                  data-name="Group 61951"
                  transform="translate(0.895 2.541)"
                >
                  <G
                    id="Group_61950"
                    data-name="Group 61950"
                    clipPath="url(#clip-path-341)"
                  >
                    <Rect
                      id="Rectangle_8745"
                      data-name="Rectangle 8745"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-147)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61953"
                  data-name="Group 61953"
                  transform="translate(1.342 2.79)"
                >
                  <G
                    id="Group_61952"
                    data-name="Group 61952"
                    clipPath="url(#clip-path-342)"
                  >
                    <Rect
                      id="Rectangle_8746"
                      data-name="Rectangle 8746"
                      width={0.927}
                      height={0.516}
                      transform="translate(0)"
                      fill="url(#radial-gradient-148)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61955"
                  data-name="Group 61955"
                  transform="translate(1.789 3.039)"
                >
                  <G
                    id="Group_61954"
                    data-name="Group 61954"
                    clipPath="url(#clip-path-343)"
                  >
                    <Rect
                      id="Rectangle_8747"
                      data-name="Rectangle 8747"
                      width={0.927}
                      height={0.516}
                      transform="translate(0)"
                      fill="url(#radial-gradient-149)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61957"
                  data-name="Group 61957"
                  transform="translate(0 2.541)"
                >
                  <G
                    id="Group_61956"
                    data-name="Group 61956"
                    clipPath="url(#clip-path-344)"
                  >
                    <Rect
                      id="Rectangle_8748"
                      data-name="Rectangle 8748"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-150)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61959"
                  data-name="Group 61959"
                  transform="translate(0.447 2.79)"
                >
                  <G
                    id="Group_61958"
                    data-name="Group 61958"
                    clipPath="url(#clip-path-345)"
                  >
                    <Rect
                      id="Rectangle_8749"
                      data-name="Rectangle 8749"
                      width={0.927}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-151)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61961"
                  data-name="Group 61961"
                  transform="translate(0.895 3.039)"
                >
                  <G
                    id="Group_61960"
                    data-name="Group 61960"
                    clipPath="url(#clip-path-346)"
                  >
                    <Rect
                      id="Rectangle_8750"
                      data-name="Rectangle 8750"
                      width={0.928}
                      height={0.516}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-152)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61963"
                  data-name="Group 61963"
                  transform="translate(0 3.039)"
                >
                  <G
                    id="Group_61962"
                    data-name="Group 61962"
                    clipPath="url(#clip-path-347)"
                  >
                    <Rect
                      id="Rectangle_8751"
                      data-name="Rectangle 8751"
                      width={0.927}
                      height={0.516}
                      transform="translate(0)"
                      fill="url(#radial-gradient-153)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61965"
                  data-name="Group 61965"
                  transform="translate(2.189 1.493)"
                >
                  <G
                    id="Group_61964"
                    data-name="Group 61964"
                    clipPath="url(#clip-path-348)"
                  >
                    <Rect
                      id="Rectangle_8752"
                      data-name="Rectangle 8752"
                      width={0.127}
                      height={0.123}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-154)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61967"
                  data-name="Group 61967"
                  transform="translate(2.189)"
                >
                  <G
                    id="Group_61966"
                    data-name="Group 61966"
                    clipPath="url(#clip-path-349)"
                  >
                    <Rect
                      id="Rectangle_8753"
                      data-name="Rectangle 8753"
                      width={0.127}
                      height={0.123}
                      transform="translate(0)"
                      fill="url(#radial-gradient-155)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61969"
                  data-name="Group 61969"
                  transform="translate(1.295 2.987)"
                >
                  <G
                    id="Group_61968"
                    data-name="Group 61968"
                    clipPath="url(#clip-path-350)"
                  >
                    <Rect
                      id="Rectangle_8754"
                      data-name="Rectangle 8754"
                      width={0.127}
                      height={0.123}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-156)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61971"
                  data-name="Group 61971"
                  transform="translate(3.978 3.484)"
                >
                  <G
                    id="Group_61970"
                    data-name="Group 61970"
                    clipPath="url(#clip-path-351)"
                  >
                    <Rect
                      id="Rectangle_8755"
                      data-name="Rectangle 8755"
                      width={0.127}
                      height={0.122}
                      transform="translate(0)"
                      fill="url(#radial-gradient-157)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61973"
                  data-name="Group 61973"
                  transform="translate(4.426 2.24)"
                >
                  <G
                    id="Group_61972"
                    data-name="Group 61972"
                    clipPath="url(#clip-path-352)"
                  >
                    <Rect
                      id="Rectangle_8756"
                      data-name="Rectangle 8756"
                      width={0.127}
                      height={0.123}
                      fill="url(#radial-gradient-158)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61975"
                  data-name="Group 61975"
                  transform="translate(3.531 2.738)"
                >
                  <G
                    id="Group_61974"
                    data-name="Group 61974"
                    clipPath="url(#clip-path-353)"
                  >
                    <Rect
                      id="Rectangle_8757"
                      data-name="Rectangle 8757"
                      width={0.127}
                      height={0.123}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-159)"
                    />
                  </G>
                </G>
                <G
                  id="Group_61977"
                  data-name="Group 61977"
                  transform="translate(0.847 0.747)"
                >
                  <G
                    id="Group_61976"
                    data-name="Group 61976"
                    clipPath="url(#clip-path-354)"
                  >
                    <Rect
                      id="Rectangle_8758"
                      data-name="Rectangle 8758"
                      width={0.127}
                      height={0.123}
                      transform="translate(0 0)"
                      fill="url(#radial-gradient-160)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_61984"
        data-name="Group 61984"
        transform="translate(28.521 27.432)"
      >
        <G
          id="Group_61983"
          data-name="Group 61983"
          clipPath="url(#clip-path-355)"
        >
          <Rect
            id="Rectangle_8761"
            data-name="Rectangle 8761"
            width={6.503}
            height={5.147}
            transform="translate(-1.189 0.509) rotate(-24.015)"
            fill="url(#linear-gradient-106)"
          />
        </G>
      </G>
      <G
        id="Group_61986"
        data-name="Group 61986"
        transform="translate(13.667 9.9)"
      >
        <G
          id="Group_61985"
          data-name="Group 61985"
          clipPath="url(#clip-path-73)"
        >
          <Image
            id="Rectangle_8762"
            data-name="Rectangle 8762"
            width={3.633}
            height={3.913}
            transform="translate(14.28 16.866)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADaADAAQAAAABAAAADgAAAADNokBEAAAAHklEQVQoFWP8//8/A6mAiVQNIPWjmqChNhoQdA8IAM9GAxkR5k2hAAAAAElFTkSuQmCC"
          />
        </G>
      </G>
      <G
        id="Group_61988"
        data-name="Group 61988"
        transform="translate(51.277 18.65)"
      >
        <G
          id="Group_61987"
          data-name="Group 61987"
          clipPath="url(#clip-path-357)"
        >
          <Rect
            id="Rectangle_8764"
            data-name="Rectangle 8764"
            width={1.994}
            height={1.144}
            transform="translate(-0.002 0)"
            fill="url(#linear-gradient-107)"
          />
        </G>
      </G>
      <G
        id="Group_61990"
        data-name="Group 61990"
        transform="translate(51.754 19.393)"
      >
        <G
          id="Group_61989"
          data-name="Group 61989"
          clipPath="url(#clip-path-358)"
        >
          <Rect
            id="Rectangle_8765"
            data-name="Rectangle 8765"
            width={1.158}
            height={0.658}
            transform="translate(0 0)"
            fill="url(#linear-gradient-108)"
          />
        </G>
      </G>
      <G
        id="Group_61992"
        data-name="Group 61992"
        transform="translate(50.921 18.908)"
      >
        <G
          id="Group_61991"
          data-name="Group 61991"
          clipPath="url(#clip-path-359)"
        >
          <Rect
            id="Rectangle_8766"
            data-name="Rectangle 8766"
            width={0.876}
            height={0.501}
            transform="translate(-0.002)"
            fill="url(#linear-gradient-109)"
          />
        </G>
      </G>
      <G
        id="Group_61994"
        data-name="Group 61994"
        transform="translate(50.564 19.165)"
      >
        <G
          id="Group_61993"
          data-name="Group 61993"
          clipPath="url(#clip-path-360)"
        >
          <Rect
            id="Rectangle_8767"
            data-name="Rectangle 8767"
            width={1.994}
            height={1.144}
            transform="translate(-0.002 0)"
            fill="url(#linear-gradient-110)"
          />
        </G>
      </G>
      <G
        id="Group_61996"
        data-name="Group 61996"
        transform="translate(65.378 26.052)"
      >
        <G
          id="Group_61995"
          data-name="Group 61995"
          clipPath="url(#clip-path-361)"
        >
          <Rect
            id="Rectangle_8768"
            data-name="Rectangle 8768"
            width={1.994}
            height={1.144}
            transform="translate(-0.002)"
            fill="url(#linear-gradient-111)"
          />
        </G>
      </G>
      <G
        id="Group_61998"
        data-name="Group 61998"
        transform="translate(65.855 26.795)"
      >
        <G
          id="Group_61997"
          data-name="Group 61997"
          clipPath="url(#clip-path-362)"
        >
          <Rect
            id="Rectangle_8769"
            data-name="Rectangle 8769"
            width={1.158}
            height={0.658}
            transform="translate(0 0)"
            fill="url(#linear-gradient-112)"
          />
        </G>
      </G>
      <G
        id="Group_62000"
        data-name="Group 62000"
        transform="translate(65.022 26.309)"
      >
        <G
          id="Group_61999"
          data-name="Group 61999"
          clipPath="url(#clip-path-363)"
        >
          <Rect
            id="Rectangle_8770"
            data-name="Rectangle 8770"
            width={0.876}
            height={0.501}
            transform="translate(-0.002)"
            fill="url(#linear-gradient-113)"
          />
        </G>
      </G>
      <G
        id="Group_62002"
        data-name="Group 62002"
        transform="translate(64.666 26.566)"
      >
        <G
          id="Group_62001"
          data-name="Group 62001"
          clipPath="url(#clip-path-364)"
        >
          <Rect
            id="Rectangle_8771"
            data-name="Rectangle 8771"
            width={1.994}
            height={1.144}
            transform="translate(-0.002)"
            fill="url(#linear-gradient-114)"
          />
        </G>
      </G>
      <G
        id="Group_62004"
        data-name="Group 62004"
        transform="translate(61.708 33.005)"
      >
        <G
          id="Group_62003"
          data-name="Group 62003"
          clipPath="url(#clip-path-365)"
        >
          <Rect
            id="Rectangle_8772"
            data-name="Rectangle 8772"
            width={0.749}
            height={0.807}
            transform="translate(-0.191 0.248) rotate(-52.348)"
            fill="url(#linear-gradient-115)"
          />
        </G>
      </G>
      <G
        id="Group_62006"
        data-name="Group 62006"
        transform="translate(60.407 32.266)"
      >
        <G
          id="Group_62005"
          data-name="Group 62005"
          clipPath="url(#clip-path-366)"
        >
          <Rect
            id="Rectangle_8773"
            data-name="Rectangle 8773"
            width={1.603}
            height={1.72}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.417, 0.54)"
            fill="url(#linear-gradient-116)"
          />
        </G>
      </G>
      <G
        id="Group_62008"
        data-name="Group 62008"
        transform="translate(62.269 33.306)"
      >
        <G
          id="Group_62007"
          data-name="Group 62007"
          clipPath="url(#clip-path-367)"
        >
          <Rect
            id="Rectangle_8774"
            data-name="Rectangle 8774"
            width={2.04}
            height={2.201}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.515, 0.668)"
            fill="url(#linear-gradient-117)"
          />
        </G>
      </G>
      <G
        id="Group_62010"
        data-name="Group 62010"
        transform="translate(60.821 33.86)"
      >
        <G
          id="Group_62009"
          data-name="Group 62009"
          clipPath="url(#clip-path-368)"
        >
          <Rect
            id="Rectangle_8775"
            data-name="Rectangle 8775"
            width={2.774}
            height={2.994}
            transform="translate(-0.7 0.908) rotate(-52.348)"
            fill="url(#linear-gradient-118)"
          />
        </G>
      </G>
      <G
        id="Group_62012"
        data-name="Group 62012"
        transform="translate(63.27 35.181)"
      >
        <G
          id="Group_62011"
          data-name="Group 62011"
          clipPath="url(#clip-path-369)"
        >
          <Rect
            id="Rectangle_8776"
            data-name="Rectangle 8776"
            width={1.527}
            height={1.634}
            transform="translate(-0.402 0.521) rotate(-52.348)"
            fill="url(#linear-gradient-119)"
          />
        </G>
      </G>
      <G
        id="Group_62014"
        data-name="Group 62014"
        transform="translate(64.474 35.872)"
      >
        <G
          id="Group_62013"
          data-name="Group 62013"
          clipPath="url(#clip-path-370)"
        >
          <Rect
            id="Rectangle_8777"
            data-name="Rectangle 8777"
            width={1.291}
            height={1.392}
            transform="translate(-0.327 0.424) rotate(-52.348)"
            fill="url(#linear-gradient-120)"
          />
        </G>
      </G>
      <G
        id="Group_62016"
        data-name="Group 62016"
        transform="translate(59.21 32.953)"
      >
        <G
          id="Group_62015"
          data-name="Group 62015"
          clipPath="url(#clip-path-371)"
        >
          <Rect
            id="Rectangle_8778"
            data-name="Rectangle 8778"
            width={1.852}
            height={1.989}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.479, 0.621)"
            fill="url(#linear-gradient-121)"
          />
        </G>
      </G>
      <G
        id="Group_62018"
        data-name="Group 62018"
        transform="translate(59.803 32.613)"
      >
        <G
          id="Group_62017"
          data-name="Group 62017"
          clipPath="url(#clip-path-372)"
        >
          <Rect
            id="Rectangle_8779"
            data-name="Rectangle 8779"
            width={2.869}
            height={3.087}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.734, 0.952)"
            fill="url(#linear-gradient-122)"
          />
        </G>
      </G>
      <G
        id="Group_62020"
        data-name="Group 62020"
        transform="translate(62.467 34.087)"
      >
        <G
          id="Group_62019"
          data-name="Group 62019"
          clipPath="url(#clip-path-373)"
        >
          <Rect
            id="Rectangle_8780"
            data-name="Rectangle 8780"
            width={3.341}
            height={3.598}
            transform="translate(-0.854 1.107) rotate(-52.348)"
            fill="url(#linear-gradient-123)"
          />
        </G>
      </G>
      <G
        id="Group_62022"
        data-name="Group 62022"
        transform="translate(54.698 25.583)"
      >
        <G
          id="Group_62021"
          data-name="Group 62021"
          clipPath="url(#clip-path-374)"
        >
          <Rect
            id="Rectangle_8781"
            data-name="Rectangle 8781"
            width={0.749}
            height={0.807}
            transform="translate(-0.191 0.248) rotate(-52.348)"
            fill="url(#linear-gradient-124)"
          />
        </G>
      </G>
      <G
        id="Group_62024"
        data-name="Group 62024"
        transform="translate(53.397 24.844)"
      >
        <G
          id="Group_62023"
          data-name="Group 62023"
          clipPath="url(#clip-path-375)"
        >
          <Rect
            id="Rectangle_8782"
            data-name="Rectangle 8782"
            width={1.604}
            height={1.721}
            transform="translate(-0.417 0.54) rotate(-52.348)"
            fill="url(#linear-gradient-125)"
          />
        </G>
      </G>
      <G
        id="Group_62026"
        data-name="Group 62026"
        transform="translate(55.259 25.885)"
      >
        <G
          id="Group_62025"
          data-name="Group 62025"
          clipPath="url(#clip-path-376)"
        >
          <Rect
            id="Rectangle_8783"
            data-name="Rectangle 8783"
            width={2.04}
            height={2.201}
            transform="translate(-0.515 0.668) rotate(-52.348)"
            fill="url(#linear-gradient-126)"
          />
        </G>
      </G>
      <G
        id="Group_62028"
        data-name="Group 62028"
        transform="translate(53.811 26.438)"
      >
        <G
          id="Group_62027"
          data-name="Group 62027"
          clipPath="url(#clip-path-377)"
        >
          <Rect
            id="Rectangle_8784"
            data-name="Rectangle 8784"
            width={2.774}
            height={2.994}
            transform="translate(-0.7 0.908) rotate(-52.348)"
            fill="url(#linear-gradient-127)"
          />
        </G>
      </G>
      <G
        id="Group_62030"
        data-name="Group 62030"
        transform="translate(56.26 27.759)"
      >
        <G
          id="Group_62029"
          data-name="Group 62029"
          clipPath="url(#clip-path-378)"
        >
          <Rect
            id="Rectangle_8785"
            data-name="Rectangle 8785"
            width={1.526}
            height={1.633}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.402, 0.52)"
            fill="url(#linear-gradient-128)"
          />
        </G>
      </G>
      <G
        id="Group_62032"
        data-name="Group 62032"
        transform="translate(57.464 28.45)"
      >
        <G
          id="Group_62031"
          data-name="Group 62031"
          clipPath="url(#clip-path-379)"
        >
          <Rect
            id="Rectangle_8786"
            data-name="Rectangle 8786"
            width={1.291}
            height={1.392}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.327, 0.424)"
            fill="url(#linear-gradient-129)"
          />
        </G>
      </G>
      <G
        id="Group_62034"
        data-name="Group 62034"
        transform="translate(52.2 25.531)"
      >
        <G
          id="Group_62033"
          data-name="Group 62033"
          clipPath="url(#clip-path-380)"
        >
          <Rect
            id="Rectangle_8787"
            data-name="Rectangle 8787"
            width={1.852}
            height={1.989}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.479, 0.621)"
            fill="url(#linear-gradient-130)"
          />
        </G>
      </G>
      <G
        id="Group_62036"
        data-name="Group 62036"
        transform="translate(52.794 25.191)"
      >
        <G
          id="Group_62035"
          data-name="Group 62035"
          clipPath="url(#clip-path-381)"
        >
          <Rect
            id="Rectangle_8788"
            data-name="Rectangle 8788"
            width={2.868}
            height={3.087}
            transform="matrix(0.611, -0.792, 0.792, 0.611, -0.734, 0.952)"
            fill="url(#linear-gradient-131)"
          />
        </G>
      </G>
      <G
        id="Group_62038"
        data-name="Group 62038"
        transform="translate(55.458 26.665)"
      >
        <G
          id="Group_62037"
          data-name="Group 62037"
          clipPath="url(#clip-path-382)"
        >
          <Rect
            id="Rectangle_8789"
            data-name="Rectangle 8789"
            width={3.342}
            height={3.598}
            transform="translate(-0.854 1.107) rotate(-52.348)"
            fill="url(#linear-gradient-132)"
          />
        </G>
      </G>
      <G
        id="Group_62040"
        data-name="Group 62040"
        transform="translate(30.033 33.327)"
      >
        <G
          id="Group_62039"
          data-name="Group 62039"
          clipPath="url(#clip-path-383)"
        >
          <Rect
            id="Rectangle_8790"
            data-name="Rectangle 8790"
            width={0.871}
            height={0.777}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.195, 0.131)"
            fill="url(#linear-gradient-133)"
          />
        </G>
      </G>
      <G
        id="Group_62042"
        data-name="Group 62042"
        transform="translate(27.753 32.055)"
      >
        <G
          id="Group_62041"
          data-name="Group 62041"
          clipPath="url(#clip-path-384)"
        >
          <Rect
            id="Rectangle_8791"
            data-name="Rectangle 8791"
            width={1.644}
            height={1.481}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.384, 0.257)"
            fill="url(#linear-gradient-134)"
          />
        </G>
      </G>
      <G
        id="Group_62044"
        data-name="Group 62044"
        transform="translate(28.957 32.746)"
      >
        <G
          id="Group_62043"
          data-name="Group 62043"
          clipPath="url(#clip-path-385)"
        >
          <Rect
            id="Rectangle_8792"
            data-name="Rectangle 8792"
            width={1.404}
            height={1.25}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.313, 0.209)"
            fill="url(#linear-gradient-135)"
          />
        </G>
      </G>
      <G
        id="Group_62046"
        data-name="Group 62046"
        transform="translate(29.827 32.621)"
      >
        <G
          id="Group_62045"
          data-name="Group 62045"
          clipPath="url(#clip-path-386)"
        >
          <Rect
            id="Rectangle_8793"
            data-name="Rectangle 8793"
            width={3.019}
            height={2.685}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.669, 0.448)"
            fill="url(#linear-gradient-136)"
          />
        </G>
      </G>
      <G
        id="Group_62048"
        data-name="Group 62048"
        transform="translate(30.629 33.655)"
      >
        <G
          id="Group_62047"
          data-name="Group 62047"
          clipPath="url(#clip-path-387)"
        >
          <Rect
            id="Rectangle_8794"
            data-name="Rectangle 8794"
            width={1.541}
            height={1.373}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.344, 0.231)"
            fill="url(#linear-gradient-137)"
          />
        </G>
      </G>
      <G
        id="Group_62050"
        data-name="Group 62050"
        transform="translate(28.216 31.715)"
      >
        <G
          id="Group_62049"
          data-name="Group 62049"
          clipPath="url(#clip-path-388)"
        >
          <Rect
            id="Rectangle_8795"
            data-name="Rectangle 8795"
            width={2.003}
            height={1.795}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.458, 0.307)"
            fill="url(#linear-gradient-138)"
          />
        </G>
      </G>
      <G
        id="Group_62052"
        data-name="Group 62052"
        transform="translate(27.234 32.445)"
      >
        <G
          id="Group_62051"
          data-name="Group 62051"
          clipPath="url(#clip-path-389)"
        >
          <Rect
            id="Rectangle_8796"
            data-name="Rectangle 8796"
            width={3.626}
            height={3.237}
            transform="translate(-0.816 0.546) rotate(-33.796)"
            fill="url(#linear-gradient-139)"
          />
        </G>
      </G>
      <G
        id="Group_62054"
        data-name="Group 62054"
        transform="translate(43.063 34.317)"
      >
        <G
          id="Group_62053"
          data-name="Group 62053"
          clipPath="url(#clip-path-390)"
        >
          <Rect
            id="Rectangle_8797"
            data-name="Rectangle 8797"
            width={0.871}
            height={0.777}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.195, 0.131)"
            fill="url(#linear-gradient-140)"
          />
        </G>
      </G>
      <G
        id="Group_62056"
        data-name="Group 62056"
        transform="translate(40.783 33.044)"
      >
        <G
          id="Group_62055"
          data-name="Group 62055"
          clipPath="url(#clip-path-391)"
        >
          <Rect
            id="Rectangle_8798"
            data-name="Rectangle 8798"
            width={1.644}
            height={1.482}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.384, 0.257)"
            fill="url(#linear-gradient-141)"
          />
        </G>
      </G>
      <G
        id="Group_62058"
        data-name="Group 62058"
        transform="translate(41.986 33.735)"
      >
        <G
          id="Group_62057"
          data-name="Group 62057"
          clipPath="url(#clip-path-392)"
        >
          <Rect
            id="Rectangle_8799"
            data-name="Rectangle 8799"
            width={1.404}
            height={1.25}
            transform="translate(-0.313 0.209) rotate(-33.797)"
            fill="url(#linear-gradient-142)"
          />
        </G>
      </G>
      <G
        id="Group_62060"
        data-name="Group 62060"
        transform="translate(42.856 33.611)"
      >
        <G
          id="Group_62059"
          data-name="Group 62059"
          clipPath="url(#clip-path-393)"
        >
          <Rect
            id="Rectangle_8800"
            data-name="Rectangle 8800"
            width={3.019}
            height={2.685}
            transform="translate(-0.669 0.448) rotate(-33.797)"
            fill="url(#linear-gradient-143)"
          />
        </G>
      </G>
      <G
        id="Group_62062"
        data-name="Group 62062"
        transform="translate(43.658 34.644)"
      >
        <G
          id="Group_62061"
          data-name="Group 62061"
          clipPath="url(#clip-path-394)"
        >
          <Rect
            id="Rectangle_8801"
            data-name="Rectangle 8801"
            width={1.541}
            height={1.374}
            transform="translate(-0.345 0.231) rotate(-33.796)"
            fill="url(#linear-gradient-144)"
          />
        </G>
      </G>
      <G
        id="Group_62064"
        data-name="Group 62064"
        transform="translate(41.245 32.705)"
      >
        <G
          id="Group_62063"
          data-name="Group 62063"
          clipPath="url(#clip-path-395)"
        >
          <Rect
            id="Rectangle_8802"
            data-name="Rectangle 8802"
            width={2.003}
            height={1.795}
            transform="matrix(0.831, -0.556, 0.556, 0.831, -0.458, 0.307)"
            fill="url(#linear-gradient-145)"
          />
        </G>
      </G>
      <G
        id="Group_62066"
        data-name="Group 62066"
        transform="translate(40.264 33.434)"
      >
        <G
          id="Group_62065"
          data-name="Group 62065"
          clipPath="url(#clip-path-396)"
        >
          <Rect
            id="Rectangle_8803"
            data-name="Rectangle 8803"
            width={3.626}
            height={3.237}
            transform="translate(-0.816 0.546) rotate(-33.796)"
            fill="url(#linear-gradient-146)"
          />
        </G>
      </G>
      <G
        id="Group_62068"
        data-name="Group 62068"
        transform="translate(45.42 20.412)"
      >
        <G
          id="Group_62067"
          data-name="Group 62067"
          clipPath="url(#clip-path-397)"
        >
          <Rect
            id="Rectangle_8804"
            data-name="Rectangle 8804"
            width={0.784}
            height={0.552}
            transform="translate(-0.091 0.022) rotate(-13.709)"
            fill="url(#linear-gradient-147)"
          />
        </G>
      </G>
      <G
        id="Group_62070"
        data-name="Group 62070"
        transform="translate(44.124 19.677)"
      >
        <G
          id="Group_62069"
          data-name="Group 62069"
          clipPath="url(#clip-path-398)"
        >
          <Rect
            id="Rectangle_8805"
            data-name="Rectangle 8805"
            width={1.662}
            height={1.189}
            transform="translate(-0.198 0.048) rotate(-13.709)"
            fill="url(#linear-gradient-148)"
          />
        </G>
      </G>
      <G
        id="Group_62072"
        data-name="Group 62072"
        transform="translate(45.978 20.713)"
      >
        <G
          id="Group_62071"
          data-name="Group 62071"
          clipPath="url(#clip-path-399)"
        >
          <Rect
            id="Rectangle_8806"
            data-name="Rectangle 8806"
            width={2.147}
            height={1.493}
            transform="translate(-0.244 0.06) rotate(-13.709)"
            fill="url(#linear-gradient-149)"
          />
        </G>
      </G>
      <G
        id="Group_62074"
        data-name="Group 62074"
        transform="translate(47.883 21.739)"
      >
        <G
          id="Group_62073"
          data-name="Group 62073"
          clipPath="url(#clip-path-400)"
        >
          <Rect
            id="Rectangle_8807"
            data-name="Rectangle 8807"
            width={2.805}
            height={1.98}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.327, 0.08)"
            fill="url(#linear-gradient-150)"
          />
        </G>
      </G>
      <G
        id="Group_62076"
        data-name="Group 62076"
        transform="translate(50.302 23.082)"
      >
        <G
          id="Group_62075"
          data-name="Group 62075"
          clipPath="url(#clip-path-401)"
        >
          <Rect
            id="Rectangle_8808"
            data-name="Rectangle 8808"
            width={1.01}
            height={0.706}
            transform="translate(-0.116 0.028) rotate(-13.711)"
            fill="url(#linear-gradient-151)"
          />
        </G>
      </G>
      <G
        id="Group_62078"
        data-name="Group 62078"
        transform="translate(44.536 21.264)"
      >
        <G
          id="Group_62077"
          data-name="Group 62077"
          clipPath="url(#clip-path-402)"
        >
          <Rect
            id="Rectangle_8809"
            data-name="Rectangle 8809"
            width={2.919}
            height={2.03}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.332, 0.081)"
            fill="url(#linear-gradient-152)"
          />
        </G>
      </G>
      <G
        id="Group_62080"
        data-name="Group 62080"
        transform="translate(49.246 23.847)"
      >
        <G
          id="Group_62079"
          data-name="Group 62079"
          clipPath="url(#clip-path-403)"
        >
          <Rect
            id="Rectangle_8810"
            data-name="Rectangle 8810"
            width={0.841}
            height={0.589}
            transform="translate(-0.097 0.024) rotate(-13.709)"
            fill="url(#linear-gradient-153)"
          />
        </G>
      </G>
      <G
        id="Group_62082"
        data-name="Group 62082"
        transform="translate(46.975 22.58)"
      >
        <G
          id="Group_62081"
          data-name="Group 62081"
          clipPath="url(#clip-path-404)"
        >
          <Rect
            id="Rectangle_8811"
            data-name="Rectangle 8811"
            width={1.573}
            height={1.14}
            transform="matrix(0.971, -0.239, 0.239, 0.971, -0.191, 0.047)"
            fill="url(#linear-gradient-154)"
          />
        </G>
      </G>
      <G
        id="Group_62084"
        data-name="Group 62084"
        transform="translate(48.174 23.268)"
      >
        <G
          id="Group_62083"
          data-name="Group 62083"
          clipPath="url(#clip-path-405)"
        >
          <Rect
            id="Rectangle_8812"
            data-name="Rectangle 8812"
            width={1.357}
            height={0.947}
            transform="matrix(0.971, -0.239, 0.239, 0.971, -0.156, 0.038)"
            fill="url(#linear-gradient-155)"
          />
        </G>
      </G>
      <G
        id="Group_62086"
        data-name="Group 62086"
        transform="translate(42.76 23.091)"
      >
        <G
          id="Group_62085"
          data-name="Group 62085"
          clipPath="url(#clip-path-406)"
        >
          <Rect
            id="Rectangle_8813"
            data-name="Rectangle 8813"
            width={0.84}
            height={0.589}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.097, 0.024)"
            fill="url(#linear-gradient-156)"
          />
        </G>
      </G>
      <G
        id="Group_62088"
        data-name="Group 62088"
        transform="translate(40.489 21.823)"
      >
        <G
          id="Group_62087"
          data-name="Group 62087"
          clipPath="url(#clip-path-407)"
        >
          <Rect
            id="Rectangle_8814"
            data-name="Rectangle 8814"
            width={1.573}
            height={1.139}
            transform="translate(-0.19 0.046) rotate(-13.709)"
            fill="url(#linear-gradient-157)"
          />
        </G>
      </G>
      <G
        id="Group_62090"
        data-name="Group 62090"
        transform="translate(41.688 22.512)"
      >
        <G
          id="Group_62089"
          data-name="Group 62089"
          clipPath="url(#clip-path-408)"
        >
          <Rect
            id="Rectangle_8815"
            data-name="Rectangle 8815"
            width={1.356}
            height={0.946}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.155, 0.038)"
            fill="url(#linear-gradient-158)"
          />
        </G>
      </G>
      <G
        id="Group_62092"
        data-name="Group 62092"
        transform="translate(42.932 20.361)"
      >
        <G
          id="Group_62091"
          data-name="Group 62091"
          clipPath="url(#clip-path-409)"
        >
          <Rect
            id="Rectangle_8816"
            data-name="Rectangle 8816"
            width={1.925}
            height={1.371}
            transform="translate(-0.227 0.055) rotate(-13.709)"
            fill="url(#linear-gradient-159)"
          />
        </G>
      </G>
      <G
        id="Group_62094"
        data-name="Group 62094"
        transform="translate(42.554 22.388)"
      >
        <G
          id="Group_62093"
          data-name="Group 62093"
          clipPath="url(#clip-path-410)"
        >
          <Rect
            id="Rectangle_8817"
            data-name="Rectangle 8817"
            width={2.919}
            height={2.03}
            transform="translate(-0.332 0.081) rotate(-13.71)"
            fill="url(#linear-gradient-160)"
          />
        </G>
      </G>
      <G
        id="Group_62096"
        data-name="Group 62096"
        transform="translate(44.993 23.703)"
      >
        <G
          id="Group_62095"
          data-name="Group 62095"
          clipPath="url(#clip-path-411)"
        >
          <Rect
            id="Rectangle_8818"
            data-name="Rectangle 8818"
            width={1.572}
            height={1.139}
            transform="translate(-0.19 0.046) rotate(-13.709)"
            fill="url(#linear-gradient-161)"
          />
        </G>
      </G>
      <G
        id="Group_62098"
        data-name="Group 62098"
        transform="translate(40.95 21.485)"
      >
        <G
          id="Group_62097"
          data-name="Group 62097"
          clipPath="url(#clip-path-412)"
        >
          <Rect
            id="Rectangle_8819"
            data-name="Rectangle 8819"
            width={1.924}
            height={1.371}
            transform="translate(-0.227 0.055) rotate(-13.709)"
            fill="url(#linear-gradient-162)"
          />
        </G>
      </G>
      <G
        id="Group_62100"
        data-name="Group 62100"
        transform="translate(43.522 20.022)"
      >
        <G
          id="Group_62099"
          data-name="Group 62099"
          clipPath="url(#clip-path-413)"
        >
          <Rect
            id="Rectangle_8820"
            data-name="Rectangle 8820"
            width={2.998}
            height={2.113}
            transform="translate(-0.348 0.085) rotate(-13.709)"
            fill="url(#linear-gradient-163)"
          />
        </G>
      </G>
      <G
        id="Group_62102"
        data-name="Group 62102"
        transform="translate(46.176 21.49)"
      >
        <G
          id="Group_62101"
          data-name="Group 62101"
          clipPath="url(#clip-path-414)"
        >
          <Rect
            id="Rectangle_8821"
            data-name="Rectangle 8821"
            width={3.495}
            height={2.459}
            transform="translate(-0.405 0.099) rotate(-13.709)"
            fill="url(#linear-gradient-164)"
          />
        </G>
      </G>
      <G
        id="Group_62104"
        data-name="Group 62104"
        transform="translate(39.972 22.212)"
      >
        <G
          id="Group_62103"
          data-name="Group 62103"
          clipPath="url(#clip-path-415)"
        >
          <Rect
            id="Rectangle_8822"
            data-name="Rectangle 8822"
            width={3.495}
            height={2.459}
            transform="translate(-0.405 0.099) rotate(-13.709)"
            fill="url(#linear-gradient-165)"
          />
        </G>
      </G>
      <G
        id="Group_62106"
        data-name="Group 62106"
        transform="translate(44.217 21.72)"
      >
        <G
          id="Group_62105"
          data-name="Group 62105"
          clipPath="url(#clip-path-416)"
        >
          <Rect
            id="Rectangle_8823"
            data-name="Rectangle 8823"
            width={2.136}
            height={1.489}
            transform="translate(-0.244 0.059) rotate(-13.709)"
            fill="url(#linear-gradient-166)"
          />
        </G>
      </G>
      <G
        id="Group_62108"
        data-name="Group 62108"
        transform="translate(46.112 22.746)"
      >
        <G
          id="Group_62107"
          data-name="Group 62107"
          clipPath="url(#clip-path-417)"
        >
          <Rect
            id="Rectangle_8824"
            data-name="Rectangle 8824"
            width={2.282}
            height={1.62}
            transform="translate(-0.268 0.065) rotate(-13.709)"
            fill="url(#linear-gradient-167)"
          />
        </G>
      </G>
      <G
        id="Group_62110"
        data-name="Group 62110"
        transform="translate(42.368 20.685)"
      >
        <G
          id="Group_62109"
          data-name="Group 62109"
          clipPath="url(#clip-path-418)"
        >
          <Rect
            id="Rectangle_8825"
            data-name="Rectangle 8825"
            width={2.211}
            height={1.57}
            transform="translate(-0.26 0.063) rotate(-13.71)"
            fill="url(#linear-gradient-168)"
          />
        </G>
      </G>
      <G
        id="Group_62112"
        data-name="Group 62112"
        transform="translate(42.987 38.85)"
      >
        <G
          id="Group_62111"
          data-name="Group 62111"
          clipPath="url(#clip-path-419)"
        >
          <Rect
            id="Rectangle_8826"
            data-name="Rectangle 8826"
            width={0.784}
            height={0.551}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.091, 0.022)"
            fill="url(#linear-gradient-169)"
          />
        </G>
      </G>
      <G
        id="Group_62114"
        data-name="Group 62114"
        transform="translate(41.691 38.115)"
      >
        <G
          id="Group_62113"
          data-name="Group 62113"
          clipPath="url(#clip-path-420)"
        >
          <Rect
            id="Rectangle_8827"
            data-name="Rectangle 8827"
            width={1.662}
            height={1.189}
            transform="translate(-0.198 0.048) rotate(-13.709)"
            fill="url(#linear-gradient-170)"
          />
        </G>
      </G>
      <G
        id="Group_62116"
        data-name="Group 62116"
        transform="translate(43.545 39.151)"
      >
        <G
          id="Group_62115"
          data-name="Group 62115"
          clipPath="url(#clip-path-421)"
        >
          <Rect
            id="Rectangle_8828"
            data-name="Rectangle 8828"
            width={2.147}
            height={1.493}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.244, 0.06)"
            fill="url(#linear-gradient-171)"
          />
        </G>
      </G>
      <G
        id="Group_62118"
        data-name="Group 62118"
        transform="translate(45.45 40.177)"
      >
        <G
          id="Group_62117"
          data-name="Group 62117"
          clipPath="url(#clip-path-422)"
        >
          <Rect
            id="Rectangle_8829"
            data-name="Rectangle 8829"
            width={2.805}
            height={1.98}
            transform="translate(-0.327 0.08) rotate(-13.709)"
            fill="url(#linear-gradient-172)"
          />
        </G>
      </G>
      <G
        id="Group_62120"
        data-name="Group 62120"
        transform="translate(47.869 41.52)"
      >
        <G
          id="Group_62119"
          data-name="Group 62119"
          clipPath="url(#clip-path-423)"
        >
          <Rect
            id="Rectangle_8830"
            data-name="Rectangle 8830"
            width={1.01}
            height={0.706}
            transform="translate(-0.116 0.028) rotate(-13.709)"
            fill="url(#linear-gradient-173)"
          />
        </G>
      </G>
      <G
        id="Group_62122"
        data-name="Group 62122"
        transform="translate(42.104 39.702)"
      >
        <G
          id="Group_62121"
          data-name="Group 62121"
          clipPath="url(#clip-path-424)"
        >
          <Rect
            id="Rectangle_8831"
            data-name="Rectangle 8831"
            width={2.919}
            height={2.03}
            transform="translate(-0.332 0.081) rotate(-13.709)"
            fill="url(#linear-gradient-174)"
          />
        </G>
      </G>
      <G
        id="Group_62124"
        data-name="Group 62124"
        transform="translate(46.814 42.285)"
      >
        <G
          id="Group_62123"
          data-name="Group 62123"
          clipPath="url(#clip-path-425)"
        >
          <Rect
            id="Rectangle_8832"
            data-name="Rectangle 8832"
            width={0.841}
            height={0.589}
            transform="translate(-0.097 0.024) rotate(-13.709)"
            fill="url(#linear-gradient-175)"
          />
        </G>
      </G>
      <G
        id="Group_62126"
        data-name="Group 62126"
        transform="translate(44.543 41.018)"
      >
        <G
          id="Group_62125"
          data-name="Group 62125"
          clipPath="url(#clip-path-426)"
        >
          <Rect
            id="Rectangle_8833"
            data-name="Rectangle 8833"
            width={1.572}
            height={1.139}
            transform="translate(-0.19 0.046) rotate(-13.709)"
            fill="url(#linear-gradient-176)"
          />
        </G>
      </G>
      <G
        id="Group_62128"
        data-name="Group 62128"
        transform="translate(45.742 41.706)"
      >
        <G
          id="Group_62127"
          data-name="Group 62127"
          clipPath="url(#clip-path-427)"
        >
          <Rect
            id="Rectangle_8834"
            data-name="Rectangle 8834"
            width={1.356}
            height={0.946}
            transform="translate(-0.155 0.038) rotate(-13.709)"
            fill="url(#linear-gradient-177)"
          />
        </G>
      </G>
      <G
        id="Group_62130"
        data-name="Group 62130"
        transform="translate(40.499 38.799)"
      >
        <G
          id="Group_62129"
          data-name="Group 62129"
          clipPath="url(#clip-path-428)"
        >
          <Rect
            id="Rectangle_8835"
            data-name="Rectangle 8835"
            width={1.924}
            height={1.371}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.227, 0.055)"
            fill="url(#linear-gradient-178)"
          />
        </G>
      </G>
      <G
        id="Group_62132"
        data-name="Group 62132"
        transform="translate(41.09 38.46)"
      >
        <G
          id="Group_62131"
          data-name="Group 62131"
          clipPath="url(#clip-path-429)"
        >
          <Rect
            id="Rectangle_8836"
            data-name="Rectangle 8836"
            width={2.998}
            height={2.113}
            transform="translate(-0.348 0.085) rotate(-13.709)"
            fill="url(#linear-gradient-179)"
          />
        </G>
      </G>
      <G
        id="Group_62134"
        data-name="Group 62134"
        transform="translate(43.744 39.928)"
      >
        <G
          id="Group_62133"
          data-name="Group 62133"
          clipPath="url(#clip-path-430)"
        >
          <Rect
            id="Rectangle_8837"
            data-name="Rectangle 8837"
            width={3.495}
            height={2.459}
            transform="translate(-0.405 0.099) rotate(-13.709)"
            fill="url(#linear-gradient-180)"
          />
        </G>
      </G>
      <G
        id="Group_62136"
        data-name="Group 62136"
        transform="translate(41.784 40.159)"
      >
        <G
          id="Group_62135"
          data-name="Group 62135"
          clipPath="url(#clip-path-431)"
        >
          <Rect
            id="Rectangle_8838"
            data-name="Rectangle 8838"
            width={2.136}
            height={1.489}
            transform="matrix(0.972, -0.237, 0.237, 0.972, -0.244, 0.059)"
            fill="url(#linear-gradient-181)"
          />
        </G>
      </G>
      <G
        id="Group_62138"
        data-name="Group 62138"
        transform="translate(43.68 41.184)"
      >
        <G
          id="Group_62137"
          data-name="Group 62137"
          clipPath="url(#clip-path-432)"
        >
          <Rect
            id="Rectangle_8839"
            data-name="Rectangle 8839"
            width={2.282}
            height={1.62}
            transform="translate(-0.268 0.065) rotate(-13.709)"
            fill="url(#linear-gradient-182)"
          />
        </G>
      </G>
      <G
        id="Group_62140"
        data-name="Group 62140"
        transform="translate(39.935 39.123)"
      >
        <G
          id="Group_62139"
          data-name="Group 62139"
          clipPath="url(#clip-path-433)"
        >
          <Rect
            id="Rectangle_8840"
            data-name="Rectangle 8840"
            width={2.211}
            height={1.57}
            transform="translate(-0.26 0.063) rotate(-13.709)"
            fill="url(#linear-gradient-183)"
          />
        </G>
      </G>
      <G
        id="Group_62142"
        data-name="Group 62142"
        transform="translate(27.729 13.719)"
      >
        <G
          id="Group_62141"
          data-name="Group 62141"
          clipPath="url(#clip-path-434)"
        >
          <Path
            id="Path_67971"
            data-name="Path 67971"
            d="M115.512,79.04l-5.317,2.954L136.864,96.87l5.361-2.927L115.542,79.059a.246.246,0,0,1-.03-.019"
            transform="translate(-107.127 -70.67)"
            fill="#002e8a"
          />
        </G>
      </G>
      <G
        id="Group_62144"
        data-name="Group 62144"
        transform="translate(30.796 22.09)"
      >
        <G
          id="Group_62143"
          data-name="Group 62143"
          clipPath="url(#clip-path-435)"
        >
          <Rect
            id="Rectangle_8842"
            data-name="Rectangle 8842"
            width={5.409}
            height={5.971}
            transform="translate(0 0)"
            fill="url(#linear-gradient-184)"
          />
        </G>
      </G>
      <G
        id="Group_62146"
        data-name="Group 62146"
        transform="translate(27.729 13.719)"
      >
        <G
          id="Group_62145"
          data-name="Group 62145"
          clipPath="url(#clip-path-434)"
        >
          <Image
            id="Rectangle_8843"
            data-name="Rectangle 8843"
            width={19.563}
            height={13.694}
            transform="translate(10.559 10.532)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAxCAYAAABnCd/9AAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAARqADAAQAAAABAAAAMQAAAAAGHx79AAAAoElEQVRoBe3SsQ0AIBADMWD/nR9Ro9vAKa+0smdm2S9w/qQ8ATDxAzBgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEIl8+8gNfkqcVSAAAAABJRU5ErkJggg=="
          />
        </G>
      </G>
      <G
        id="Group_62148"
        data-name="Group 62148"
        transform="translate(40.024 20.608)"
      >
        <G
          id="Group_62147"
          data-name="Group 62147"
          clipPath="url(#clip-path-437)"
        >
          <Rect
            id="Rectangle_8845"
            data-name="Rectangle 8845"
            width={22.681}
            height={24.214}
            transform="translate(-6.37 12.321) rotate(-62.661)"
            fill="url(#linear-gradient-185)"
          />
        </G>
      </G>
      <G
        id="Group_62150"
        data-name="Group 62150"
        transform="translate(38.407 21.272)"
      >
        <G
          id="Group_62149"
          data-name="Group 62149"
          clipPath="url(#clip-path-438)"
        >
          <Rect
            id="Rectangle_8846"
            data-name="Rectangle 8846"
            width={20.669}
            height={23.255}
            transform="translate(-5.248 11.684) rotate(-65.813)"
            fill="url(#linear-gradient-186)"
          />
        </G>
      </G>
      <G
        id="Group_62152"
        data-name="Group 62152"
        transform="translate(38.407 24.516)"
      >
        <G
          id="Group_62151"
          data-name="Group 62151"
          clipPath="url(#clip-path-439)"
        >
          <Rect
            id="Rectangle_8847"
            data-name="Rectangle 8847"
            width={17.709}
            height={21.925}
            transform="matrix(0.41, -0.912, 0.912, 0.41, -4.035, 8.984)"
            fill="url(#linear-gradient-187)"
          />
        </G>
      </G>
      <G
        id="Group_62154"
        data-name="Group 62154"
        transform="translate(27.729 13.719)"
      >
        <G
          id="Group_62153"
          data-name="Group 62153"
          clipPath="url(#clip-path-434)"
        >
          <Image
            id="Rectangle_8848"
            data-name="Rectangle 8848"
            width={19.563}
            height={12.576}
            transform="translate(8.882 9.694)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAtCAYAAAATHR0dAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAARqADAAQAAAABAAAALQAAAACjD2R+AAAAlklEQVRoBe3SsQ0AIBADMWD/nR9Ro9vAKa+0smdm2S9w/qQ8ATDxAzBgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiCyx4AJgcgeAyYEInsMmBCI7DFgQiDyBX4hA1cDkCS5AAAAAElFTkSuQmCC"
          />
          <Image
            id="Rectangle_8849"
            data-name="Rectangle 8849"
            width={24.593}
            height={18.725}
            transform="translate(7.205 6.62)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABDCAYAAAAYhMJsAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAWKADAAQAAAABAAAAQwAAAADTeMy5AAAA6ElEQVR4Ae3SsQ0AMAzDsLb//5ygR3CTD9BA+M7MaU7guXTlLxAw/kHAAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnO/BAWMBnF+pvQODA8AJigAAAABJRU5ErkJggg=="
          />
        </G>
      </G>
      <G
        id="Group_62156"
        data-name="Group 62156"
        transform="translate(46.403 22.604)"
      >
        <G
          id="Group_62155"
          data-name="Group 62155"
          clipPath="url(#clip-path-441)"
        >
          <Image
            id="Rectangle_8851"
            data-name="Rectangle 8851"
            width={3.354}
            height={3.074}
            transform="translate(-0.011 -0.03)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAACwAAAACC5AR3AAABQklEQVQoFWWRbU/CMBSFT1+2MpiCkBgS38IHo///5/hBjUZBHMLQsa3tWi+dIMabLFu685x77i3z3uNPeSfhbUJnHjwuwvtAIPff3guY/Aq2OIXTPYA5cLVGlM4QHb3sdDuAoc5uUC+vYdZncHU/ACL5QNN/gm9ixIOHLdQCZn0OvZoQdAu9nMBuCOCO3BcUrwMmNERnRc+yBWw5pChj6PwCVXZJ0cZg3MINu+CyhOzN0ZCmBTwLLs50Q3ZbnKB6n9DAG4jkE41O4UwCZ9VPJOaDGxOmba1KGnIOJg14VFEHTef0jzruZwj5koyEs+DGVQHGGkTHGcWZQiYLipP/AjKdIu4PaRuKHCs09YC21ARhPHgk8JnAt1+ARxuo0V2IJLsZzZK2a1U5dX2lld5vxdti/27aliN4WkC4uPgLgqCD+gYFWo8lOf4S+AAAAABJRU5ErkJggg=="
          />
        </G>
      </G>
      <G
        id="Group_62158"
        data-name="Group 62158"
        transform="translate(41.504 22.266)"
      >
        <G
          id="Group_62157"
          data-name="Group 62157"
          clipPath="url(#clip-path-442)"
        >
          <Image
            id="Rectangle_8852"
            data-name="Rectangle 8852"
            width={3.354}
            height={3.354}
            transform="translate(-0.142 -0.25)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAAwxNhnAAABS0lEQVQoFZWSy0+DQBjEZ2GXR1H6sDaxhxoPjf//H+PJi8b6qFra0geFBdZZqKlJT+4Fsvl+M98MCGMM/nPk2XCtI9RFxHsBITO4fvp35gQY46JY3aHc3KDKu4ARcLwdZPQBr/cER+0teAKKZIrD9z30+hZldkXAgRusoOIXmMpHcP0A4RYtUO5GKNYTFEsLTVFuhzB0kJ0Vat3hoCa8tE4tUOU9lPsh9GZMaIx8MaGqhNd/4yo55MUc1aHPjY6AqVRjW+uA+0fQ6YjKAdxO2jxN6cPUioBoHbgbHHlgSLYSbGn93jjIMG3uHLZlZxisBdwwodoX1OWMlYZwCRqGthlUPGNTnxRKCBxbkuECXvcZ1lrIHFU8aFvy1w1ga1Xx6wmwb/7gEcLRVE2YI24Ax9tSfd6ICVHZMXH2a5jKY1B+adYqVMZsmR38PT/eeJLcSPLrkAAAAABJRU5ErkJggg=="
          />
        </G>
      </G>
      <G
        id="Group_62160"
        data-name="Group 62160"
        transform="translate(36.433 21.867)"
      >
        <G
          id="Group_62159"
          data-name="Group 62159"
          clipPath="url(#clip-path-443)"
        >
          <Image
            id="Rectangle_8853"
            data-name="Rectangle 8853"
            width={3.354}
            height={3.354}
            transform="translate(-0.102 -0.131)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAADAAAAAAwxNhnAAABI0lEQVQoFZVRy1KDQBBs2IWYKIZYag56MXrx/7/H5KRWJaghSHgu48wumOJilXtgtpbu6Z4ej4jwn6NHYGonaPIlujoCyIcf5FCzBGpyGHAngimuUH09osnuYcqYCR788BtB9I4wXnN9FZIjkAlR7Veokmdb2/zGEtRZyuQFqGM1XUBNPx2hZRtNdod6/4Bq94Q6XTJIcdcPECmndL49Ebr6Al05R1tcoz7cotyuIPOQ2UBPRSWGkbkAXz6QoAietSHepTsZVufBf98t0nOWbBphJpLOhgl6S4lVkJQEwx0cQXN0QfTWD6iZmPI/ZWs439iENM/AZ1A42uhIsucoXaxyz2yjcPECPdsJwRtt2lSXkMRkcSR7CI4WKA76MyYMr3/UH1EwkuM79zbbAAAAAElFTkSuQmCC"
          />
        </G>
      </G>
      <G
        id="Group_62162"
        data-name="Group 62162"
        transform="translate(52.348 30.127)"
      >
        <G
          id="Group_62161"
          data-name="Group 62161"
          clipPath="url(#clip-path-444)"
        >
          <Image
            id="Rectangle_8854"
            data-name="Rectangle 8854"
            width={3.354}
            height={3.074}
            transform="translate(-0.087 -0.006)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAACwAAAACC5AR3AAABMUlEQVQoFWWRbUvDMBSFT97a2a2lVsUJghP2wf//dxwiOHDufa57aZM03qRCmV7Il3vy3HNyw5xz+FeuUaHHuP6ryYuGKYfQh3s09QBgDjwqofpfkHR+qwPq7TOq9Rh6/whb5aQ7iHgHk00RX78iyt890wLmdIMArF5QbcYwhxyMHESyDW6MWYL3EFerFrDHW+jyAfVuhGr5RPAwOET5DP4ddBEqnXZAo5MwyZ5TmLLAeTEKDlzWsFmGRg/QmKSLBG5pkmmPqCF6pRfBpAYTpDHSKBZVG0lElK+3oW0s6HFZuOhVlS6pN6coG/D4uwPkYAaVfZB1P7jItKCJoCHrsB2fX/VnHcDlCXExCbbeyVaZF8NaVfpJ0Bu5Vr7FLn7aNRLmeBecvMrVATKZk2vI71s/sWeAMNru82AAAAAASUVORK5CYII="
          />
        </G>
      </G>
      <G
        id="Group_62164"
        data-name="Group 62164"
        transform="translate(57.496 33.551)"
      >
        <G
          id="Group_62163"
          data-name="Group 62163"
          clipPath="url(#clip-path-445)"
        >
          <Image
            id="Rectangle_8855"
            data-name="Rectangle 8855"
            width={3.354}
            height={3.074}
            transform="translate(-0.204 -0.077)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAACwAAAACC5AR3AAABRUlEQVQoFW2RWU/DMBCEx06cpE3bFIqQUDn6gvj/fwaJJxBHHmhKD5q2iWObcYJUcViKIu3uN54dC+cc/j3OBRDC/O6FPwrORNCfU5jDCZyJIWSNoLeEGr5BBJWfPQK26aMq7lCvZ2jKc7gmgQgPCPvvFMgQTx4g1e4I6NUNquVtC+nNFFYnHDhAjXI4qwhXSM7uO8DWKTRV9eaS0IzQNVWHCJItbBMRLBGmc9jRyzdAO1anMNUIZjdGvbpAtbiijVfusGE9g639TE+2SwthmYjjZwFpIEMuS3UR1FzcdGmxD2G7G2S0hYzXVCugBgXcJKaFD0IlEyraeuD70bYDfGRqkMNkjNPGkFHpr6f3PYEc0fi5/TO1DvC+ovFTm4ZklCrNYQ1TolDYn0Nlz+w/+jHx56XN/rR9OMtH9DuEyYqWFn7Yny/ORJMSh4U1GAAAAABJRU5ErkJggg=="
          />
        </G>
      </G>
      <G
        id="Group_62166"
        data-name="Group 62166"
        transform="translate(33.777 18.982)"
      >
        <G
          id="Group_62165"
          data-name="Group 62165"
          clipPath="url(#clip-path-446)"
        >
          <Image
            id="Rectangle_8856"
            data-name="Rectangle 8856"
            width={3.354}
            height={3.074}
            transform="translate(-0.24 -0.041)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAADKADAAQAAAABAAAACwAAAACC5AR3AAABQ0lEQVQoFWWRW0/CQBCFz156o0Xl8kBMiEYf1P//b3zQB4MCJVDkUtrtdj1tTSBhn3Zn58x8c0Y453B1nFNwVQAhKwhVXv7ry0ebVO6msMcR6ipsBSrM4PW/ocJNk3sW1FWEYvWKMnuC2U9Qm7itrnsp7OkOwegdvJ8F5neKYvNM0RvKLbsUMaQuWX0OZ30IfWKXdSdoAtVxjGp/zw4POKWPvA8ggyM7+ZD+ATqes9NQtjM0vLXpwZYJgwnMboz85wUmm8DmN6iLPhz/XRV2AiFt54g05DaQXg7vJmWHA1G6GOgYhO2QpHeACrYcakXmlA4FRMgoLODfLhhfQkUb5uzOQ3v9WeuGsx6Z96iJJ1QBnczhDz5ZaMb4hUDHSwS1bt3QyYLMUYunojXxvhAMPpp5xdWmm33YfEgru01Loja4/+cPOgeYChyOASMAAAAASUVORK5CYII="
          />
        </G>
      </G>
      <G
        id="Group_62168"
        data-name="Group 62168"
        transform="translate(51.517 31.397)"
      >
        <G
          id="Group_62167"
          data-name="Group 62167"
          clipPath="url(#clip-path-447)"
        >
          <Path
            id="Path_67982"
            data-name="Path 67982"
            d="M211.749,163.91a.529.529,0,0,1-.36.128c-.253-.038-.454.7-.362.759.045.03.286-.357.286-.357.026.031-.046.1-.1.181a2.963,2.963,0,0,0-.317.873c-.02.11.2.008.194.11-.033.533.456-.069.549-.057.314.042.6-.84.651-1.029.144-.494-.142-1.062-.54-.608"
            transform="translate(-203.472 -149.379)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67983"
            data-name="Path 67983"
            d="M212.2,165.4a.327.327,0,0,1-.209.116,1.232,1.232,0,0,1-.077.437.82.82,0,0,1-.261.345.646.646,0,0,1-.214.107.657.657,0,0,1-.066.02.4.4,0,0,1-.463.056c-.005.022-.009.043-.012.06-.02.11.2.008.194.111-.032.533.456-.069.55-.057.314.042.6-.84.651-1.03.144-.494.145-.429-.093-.165"
            transform="translate(-203.471 -150.426)"
            fill="#f39392"
          />
          <Path
            id="Path_67984"
            data-name="Path 67984"
            d="M213.689,158.991a.436.436,0,0,1,.079-.309,15.379,15.379,0,0,0,1.484-2.012l.816.534s-1.533,1.72-1.869,2.147c-.125.159-.5-.091-.51-.361"
            transform="translate(-205.486 -144.283)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67985"
            data-name="Path 67985"
            d="M214.567,160.39a.333.333,0,0,0,.228-.09,13.244,13.244,0,0,0,1.074-1.422,7.834,7.834,0,0,1,.673-.669l.158.1s-1.533,1.72-1.869,2.147c-.125.159-.283.082-.264-.071"
            transform="translate(-206.118 -145.392)"
            fill="#f39392"
          />
        </G>
      </G>
      <G
        id="Group_62170"
        data-name="Group 62170"
        transform="translate(61.202 43.405)"
      >
        <G
          id="Group_62169"
          data-name="Group 62169"
          clipPath="url(#clip-path-448)"
        >
          <Rect
            id="Rectangle_8858"
            data-name="Rectangle 8858"
            width={1.414}
            height={1.212}
            transform="translate(-0.125 0.013) rotate(-6.286)"
            fill="url(#linear-gradient-188)"
          />
        </G>
      </G>
      <G
        id="Group_62172"
        data-name="Group 62172"
        transform="translate(51.517 31.397)"
      >
        <G
          id="Group_62171"
          data-name="Group 62171"
          clipPath="url(#clip-path-447)"
        >
          <Path
            id="Path_67987"
            data-name="Path 67987"
            d="M214.186,141.223c-.442-1.022,1.32-1.636,1.6-.747.263.847,1.541,3.145,1.22,4.281-.184.649-1.535.153-1.57-.124a23.458,23.458,0,0,0-1.245-3.41"
            transform="translate(-205.794 -132.305)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_62174"
        data-name="Group 62174"
        transform="translate(59.97 39.868)"
      >
        <G
          id="Group_62173"
          data-name="Group 62173"
          clipPath="url(#clip-path-450)"
        >
          <Rect
            id="Rectangle_8860"
            data-name="Rectangle 8860"
            width={4.152}
            height={2.449}
            transform="matrix(0.164, -0.986, 0.986, 0.164, -0.748, 3.799)"
            fill="url(#linear-gradient-189)"
          />
        </G>
      </G>
      <G
        id="Group_62176"
        data-name="Group 62176"
        transform="translate(57.979 56.054)"
      >
        <G
          id="Group_62175"
          data-name="Group 62175"
          clipPath="url(#clip-path-451)"
        >
          <Rect
            id="Rectangle_8861"
            data-name="Rectangle 8861"
            width={3.229}
            height={1.887}
            transform="translate(-0.254 0.002) rotate(-1.699)"
            fill="url(#linear-gradient-190)"
          />
        </G>
      </G>
      <G
        id="Group_62178"
        data-name="Group 62178"
        transform="translate(58.908 50.498)"
      >
        <G
          id="Group_62177"
          data-name="Group 62177"
          clipPath="url(#clip-path-452)"
        >
          <Rect
            id="Rectangle_8862"
            data-name="Rectangle 8862"
            width={6.623}
            height={2.547}
            transform="translate(-0.224 6.582) rotate(-89.068)"
            fill="url(#linear-gradient-191)"
          />
        </G>
      </G>
      <G
        id="Group_62180"
        data-name="Group 62180"
        transform="translate(58.343 44.665)"
      >
        <G
          id="Group_62179"
          data-name="Group 62179"
          clipPath="url(#clip-path-453)"
        >
          <Rect
            id="Rectangle_8863"
            data-name="Rectangle 8863"
            width={8.024}
            height={2.945}
            transform="matrix(0.016, -1, 1, 0.016, -0.201, 7.978)"
            fill="url(#linear-gradient-192)"
          />
        </G>
      </G>
      <G
        id="Group_62182"
        data-name="Group 62182"
        transform="translate(54.838 56.626)"
      >
        <G
          id="Group_62181"
          data-name="Group 62181"
          clipPath="url(#clip-path-454)"
        >
          <Rect
            id="Rectangle_8864"
            data-name="Rectangle 8864"
            width={2.022}
            height={3.279}
            transform="translate(-0.324 1.792) rotate(-85.907)"
            fill="url(#linear-gradient-193)"
          />
        </G>
      </G>
      <G
        id="Group_62184"
        data-name="Group 62184"
        transform="translate(56.145 50.93)"
      >
        <G
          id="Group_62183"
          data-name="Group 62183"
          clipPath="url(#clip-path-455)"
        >
          <Rect
            id="Rectangle_8865"
            data-name="Rectangle 8865"
            width={6.657}
            height={2.474}
            transform="translate(-0.247 6.595) rotate(-88.5)"
            fill="url(#linear-gradient-194)"
          />
        </G>
      </G>
      <G
        id="Group_62186"
        data-name="Group 62186"
        transform="translate(56.114 45.136)"
      >
        <G
          id="Group_62185"
          data-name="Group 62185"
          clipPath="url(#clip-path-456)"
        >
          <Rect
            id="Rectangle_8866"
            data-name="Rectangle 8866"
            width={8.621}
            height={5.099}
            transform="translate(-1.481 7.865) rotate(-80.243)"
            fill="url(#linear-gradient-195)"
          />
        </G>
      </G>
      <G
        id="Group_62188"
        data-name="Group 62188"
        transform="translate(56.466 38.726)"
      >
        <G
          id="Group_62187"
          data-name="Group 62187"
          clipPath="url(#clip-path-457)"
        >
          <Rect
            id="Rectangle_8867"
            data-name="Rectangle 8867"
            width={5.632}
            height={9.31}
            transform="matrix(1, -0.022, 0.022, 1, -0.206, 0.005)"
            fill="url(#linear-gradient-196)"
          />
        </G>
      </G>
      <G
        id="Group_62195"
        data-name="Group 62195"
        transform="translate(51.517 31.397)"
      >
        <G
          id="Group_62194"
          data-name="Group 62194"
          clipPath="url(#clip-path-447)"
        >
          <Path
            id="Path_67996"
            data-name="Path 67996"
            d="M211.848,136.689a1.22,1.22,0,0,1-.321-.746l-1.015.41c.147.505-.067.61-.411.895.054-.041.308-.193.885-.009.66.21,1.168-.245.862-.55"
            transform="translate(-202.901 -129.348)"
            fill="#f39392"
          />
          <Path
            id="Path_67997"
            data-name="Path 67997"
            d="M213.467,136.689a1.22,1.22,0,0,1-.321-.746,4.752,4.752,0,0,0-.618.205.46.46,0,0,1,.229.382.662.662,0,0,1-.248.564.5.5,0,0,1-.161.08,2.019,2.019,0,0,1,.258.065c.66.21,1.168-.245.862-.55"
            transform="translate(-204.52 -129.348)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67998"
            data-name="Path 67998"
            d="M210.237,128.966a2.572,2.572,0,0,0-.325.526c-.014.093-.019.168-.037.242s-.136.147-.182.238a1.85,1.85,0,0,0-.077.491,2.577,2.577,0,0,0-.077.507,1.8,1.8,0,0,0,1.694.391,2.317,2.317,0,0,1,.644-.675c.428-.3-.673-2.176-1.639-1.72"
            transform="translate(-202.491 -124.27)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_67999"
            data-name="Path 67999"
            d="M209.819,131a2.6,2.6,0,0,1,.078-.507,1.843,1.843,0,0,1,.077-.491c.047-.091.165-.164.182-.238s.022-.15.037-.242a2.572,2.572,0,0,1,.325-.526.725.725,0,0,1,.254-.067.749.749,0,0,0-.535.039,2.554,2.554,0,0,0-.325.526c-.014.093-.019.168-.037.242s-.136.147-.182.238a1.85,1.85,0,0,0-.077.49,2.6,2.6,0,0,0-.077.508,1.514,1.514,0,0,0,1.134.437,1.291,1.291,0,0,1-.853-.409"
            transform="translate(-202.491 -124.272)"
            fill="#f39392"
          />
          <G
            id="Group_62193"
            data-name="Group 62193"
            transform="translate(7.573 4.841)"
            opacity={0.55}
          >
            <G id="Group_62192" data-name="Group 62192">
              <G
                id="Group_62191"
                data-name="Group 62191"
                clipPath="url(#clip-path-459)"
              >
                <G
                  id="Group_62190"
                  data-name="Group 62190"
                  transform="translate(0)"
                >
                  <G
                    id="Group_62189"
                    data-name="Group 62189"
                    clipPath="url(#clip-path-460)"
                  >
                    <Rect
                      id="Rectangle_8868"
                      data-name="Rectangle 8868"
                      width={2.407}
                      height={2.019}
                      transform="translate(-0.428 2.117) rotate(-81.08)"
                      fill="url(#linear-gradient-197)"
                    />
                  </G>
                </G>
              </G>
            </G>
          </G>
        </G>
      </G>
      <G
        id="Group_62197"
        data-name="Group 62197"
        transform="translate(59.104 35.381)"
      >
        <G
          id="Group_62196"
          data-name="Group 62196"
          clipPath="url(#clip-path-461)"
        >
          <Rect
            id="Rectangle_8871"
            data-name="Rectangle 8871"
            width={3.136}
            height={2.942}
            transform="matrix(0.155, -0.988, 0.988, 0.155, -0.556, 2.709)"
            fill="url(#linear-gradient-198)"
          />
        </G>
      </G>
      <G
        id="Group_62199"
        data-name="Group 62199"
        transform="translate(51.517 31.397)"
      >
        <G
          id="Group_62198"
          data-name="Group 62198"
          clipPath="url(#clip-path-447)"
        >
          <Path
            id="Path_68002"
            data-name="Path 68002"
            d="M211.072,130.692a.529.529,0,0,1,.165.345c-.011.255.741.378.793.281.025-.048-.385-.247-.385-.247.028-.029.1.035.19.082a2.965,2.965,0,0,0,.9.224c.111.008-.013-.2.09-.2.533-.023-.117-.446-.114-.541.009-.317-.9-.505-1.092-.54-.506-.092-1.041.253-.548.6"
            transform="translate(-203.46 -125.121)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68003"
            data-name="Path 68003"
            d="M212.414,130.081a.325.325,0,0,1,.137.2,1.238,1.238,0,0,1,.443.031.822.822,0,0,1,.37.223.65.65,0,0,1,.129.2c.01.021.018.042.026.063a.4.4,0,0,1,.1.455l.061.006c.111.008-.013-.2.09-.2.533-.023-.117-.446-.114-.541.009-.316-.9-.5-1.092-.54-.506-.092-.442-.1-.154.109"
            transform="translate(-204.408 -125.002)"
            fill="#f39392"
          />
          <Path
            id="Path_68004"
            data-name="Path 68004"
            d="M205.694,130.079a.437.437,0,0,1-.3.117,15.392,15.392,0,0,0-2.5-.018l-.047-.974s2.292.229,2.836.25c.2.008.221.459.008.624"
            transform="translate(-197.677 -124.493)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68005"
            data-name="Path 68005"
            d="M205.783,129.71a.334.334,0,0,0-.207-.132,13.241,13.241,0,0,0-1.782-.034,7.788,7.788,0,0,1-.936-.151l-.009-.189s2.292.229,2.836.25c.2.008.233.181.1.255"
            transform="translate(-197.677 -124.493)"
            fill="#f39392"
          />
        </G>
      </G>
      <G
        id="Group_62201"
        data-name="Group 62201"
        transform="translate(56.225 35.92)"
      >
        <G
          id="Group_62200"
          data-name="Group 62200"
          clipPath="url(#clip-path-463)"
        >
          <Rect
            id="Rectangle_8873"
            data-name="Rectangle 8873"
            width={1.58}
            height={1.594}
            transform="translate(-0.614 0.557) rotate(-42.286)"
            fill="url(#linear-gradient-199)"
          />
        </G>
      </G>
      <G
        id="Group_62203"
        data-name="Group 62203"
        transform="translate(51.517 31.397)"
      >
        <G
          id="Group_62202"
          data-name="Group 62202"
          clipPath="url(#clip-path-447)"
        >
          <Path
            id="Path_68007"
            data-name="Path 68007"
            d="M202.587,132.28c.676.885-.885,1.907-1.367,1.111-.46-.759-2.414-3.138-2.322-4.315.059-.755.863-.453,1.048-.041.243.542,2.065,2.491,2.641,3.245"
            transform="translate(-194.827 -124.066)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_62205"
        data-name="Group 62205"
        transform="translate(56.359 36.357)"
      >
        <G
          id="Group_62204"
          data-name="Group 62204"
          clipPath="url(#clip-path-465)"
        >
          <Rect
            id="Rectangle_8875"
            data-name="Rectangle 8875"
            width={3.461}
            height={4.175}
            transform="translate(-0.312 0.025) rotate(-4.56)"
            fill="url(#linear-gradient-200)"
          />
        </G>
      </G>
      <G
        id="Group_62207"
        data-name="Group 62207"
        transform="translate(31.386 32.888)"
      >
        <G
          id="Group_62206"
          data-name="Group 62206"
          clipPath="url(#clip-path-466)"
        >
          <Path
            id="Path_68009"
            data-name="Path 68009"
            d="M139.92,163.387c.08-.065.1-.312.1-.449s.195-.022.336.2.154.8.272.77c.076-.018.014-.385-.011-.62-.032-.3.145-.2.193-.279a1.289,1.289,0,0,0-.025-.595c-.052-.093-.5-.164-.764-.55-.046-.069-.511.295-.511.295a5.913,5.913,0,0,0,.285.843c.1.155.048.447.127.381"
            transform="translate(-131.905 -149.512)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68010"
            data-name="Path 68010"
            d="M139.92,164.169c.08-.065.1-.312.1-.449s.195-.022.335.2.154.8.272.77c.076-.018.014-.385-.011-.62-.032-.3.145-.2.193-.279a1.221,1.221,0,0,0,0-.478c-.048.078-.039.175-.12.165s-.094.121-.186.1c-.03-.008-.1.148-.243.087s-.165-.373-.263-.437c-.173-.112-.224-.143-.266-.234-.076.055-.225-.049-.225-.049a5.913,5.913,0,0,0,.285.843c.1.155.048.447.127.381"
            transform="translate(-131.905 -150.294)"
            fill="#f39392"
          />
          <Path
            id="Path_68011"
            data-name="Path 68011"
            d="M137.68,155.051a8.337,8.337,0,0,1-.514-2.354.49.49,0,0,0-.952-.027c-.134.528.94,2.67.94,2.67a.422.422,0,0,0,.527-.289"
            transform="translate(-129.523 -142.631)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68012"
            data-name="Path 68012"
            d="M137.362,155.652a1.15,1.15,0,0,1-.113-.224,1.361,1.361,0,0,1-.092-.34,6.5,6.5,0,0,1-.232-.817,3.113,3.113,0,0,1-.27-1.208.851.851,0,0,1,.106-.288c-.236-.076-.48-.06-.547.2-.134.528.939,2.67.939,2.67a.473.473,0,0,0,.208.006"
            transform="translate(-129.524 -142.938)"
            fill="#f39392"
          />
          <Path
            id="Path_68013"
            data-name="Path 68013"
            d="M131.8,171.75a2.844,2.844,0,0,1,.1,2.04c-.679,1.376-.447,4.339-.5,4.686a.4.4,0,0,0,.8.026,43.161,43.161,0,0,1,1.333-4.487,5.005,5.005,0,0,0,.219-2.1Z"
            transform="translate(-126.06 -156.639)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_62209"
        data-name="Group 62209"
        transform="translate(36.384 54.512)"
      >
        <G
          id="Group_62208"
          data-name="Group 62208"
          clipPath="url(#clip-path-467)"
        >
          <Rect
            id="Rectangle_8877"
            data-name="Rectangle 8877"
            width={2.588}
            height={1.912}
            transform="translate(-0.029 0)"
            fill="url(#linear-gradient-201)"
          />
        </G>
      </G>
      <G
        id="Group_62211"
        data-name="Group 62211"
        transform="translate(31.386 32.888)"
      >
        <G
          id="Group_62210"
          data-name="Group 62210"
          clipPath="url(#clip-path-466)"
        >
          <Path
            id="Path_68015"
            data-name="Path 68015"
            d="M138.751,173.464a7.566,7.566,0,0,1,.781,3.477,19.519,19.519,0,0,0,.523,3.643c.037.35.745.6.724-.113a38.739,38.739,0,0,1,.274-4.377,13.016,13.016,0,0,0-.408-3.156s-2.267-.053-1.894.526"
            transform="translate(-131.33 -157.494)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_62213"
        data-name="Group 62213"
        transform="translate(39.723 55.684)"
      >
        <G
          id="Group_62212"
          data-name="Group 62212"
          clipPath="url(#clip-path-469)"
        >
          <Rect
            id="Rectangle_8879"
            data-name="Rectangle 8879"
            width={1.933}
            height={2.599}
            transform="translate(-0.041 1.918) rotate(-89.67)"
            fill="url(#linear-gradient-202)"
          />
        </G>
      </G>
      <G
        id="Group_62215"
        data-name="Group 62215"
        transform="translate(36.156 42.798)"
      >
        <G
          id="Group_62214"
          data-name="Group 62214"
          clipPath="url(#clip-path-470)"
        >
          <Rect
            id="Rectangle_8880"
            data-name="Rectangle 8880"
            width={5.881}
            height={10.956}
            transform="translate(-0.069 0) rotate(-0.363)"
            fill="url(#linear-gradient-203)"
          />
        </G>
      </G>
      <G
        id="Group_62217"
        data-name="Group 62217"
        transform="translate(36.995 39.156)"
      >
        <G
          id="Group_62216"
          data-name="Group 62216"
          clipPath="url(#clip-path-471)"
        >
          <Rect
            id="Rectangle_8881"
            data-name="Rectangle 8881"
            width={3.796}
            height={6.091}
            transform="translate(-0.396 0.027) rotate(-3.877)"
            fill="url(#linear-gradient-204)"
          />
        </G>
      </G>
      <G
        id="Group_62219"
        data-name="Group 62219"
        transform="translate(31.386 32.888)"
      >
        <G
          id="Group_62218"
          data-name="Group 62218"
          clipPath="url(#clip-path-466)"
        >
          <Path
            id="Path_68019"
            data-name="Path 68019"
            d="M136.531,136.121a.5.5,0,0,1,.063-.3s-1.062-1.151-.941-.509a5.259,5.259,0,0,1,.069,1.258,3.334,3.334,0,0,1,1.105.034c-.133-.02-.269-.341-.3-.485"
            transform="translate(-129.12 -130.247)"
            fill="#f39392"
          />
          <Path
            id="Path_68020"
            data-name="Path 68020"
            d="M136.28,130.662a1.429,1.429,0,0,0-.054-.357c-.187-.741-1.167.094-1.456.753s1.364,1.549,1.6.974a1.327,1.327,0,0,0,.028-1.156c-.087-.092-.129-.125-.122-.214"
            transform="translate(-128.467 -126.567)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68021"
            data-name="Path 68021"
            d="M137.038,130.662a1.417,1.417,0,0,0-.054-.357c-.148-.585-.79-.187-1.2.331a.616.616,0,0,1,.082,0c.051,0,.1.009.154.013a.476.476,0,0,1,.125-.078,1.713,1.713,0,0,1,.529-.126c.238.044.208.345.338.578a1.008,1.008,0,0,1,.005.727.691.691,0,0,1-.376.456c.227.039.418,0,.488-.171a1.328,1.328,0,0,0,.028-1.156c-.087-.092-.129-.125-.122-.214"
            transform="translate(-129.225 -126.567)"
            fill="#f39392"
          />
          <Path
            id="Path_68022"
            data-name="Path 68022"
            d="M128.42,128.315c-.774.312-1.1-.128-1.4.867-.251.82-.957.164-1.2,1.108s.126.63-.293,1.54c-.357.775.214,1.384.461,1.826s.615.631.291,1.358c0,0,1.672-.239,1.4-1.332s.851-.7.656-1.471c-.156-.62.684-.464.61-.859s.655-.667.058-1.317c-.354-.385.76-.8.646-1.255a.821.821,0,0,0-1.222-.466"
            transform="translate(-121.747 -125.27)"
            fill="#fff"
          />
          <Path
            id="Path_68023"
            data-name="Path 68023"
            d="M137.719,133.265c-.02-.056-.208-.147-.248-.008a.516.516,0,0,0,.133.436c.1.109.165.059.144,0-.027-.076.041-.229-.028-.426"
            transform="translate(-130.429 -128.851)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68024"
            data-name="Path 68024"
            d="M146.051,131.187A1.782,1.782,0,0,0,146,132c.09.254.345.591.211.553s-.311-.08-.4-.023.169.03.289.174a3.158,3.158,0,0,0,.627.4s.466-.245.426-.32-.1-.319-.158-.5.015-.648-.075-.664a2.975,2.975,0,0,0-.568-.136c-.1.022-.254.448-.2.15s-.082-.551-.1-.445"
            transform="translate(-136.433 -127.395)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68025"
            data-name="Path 68025"
            d="M147.994,133.2c-.037.187-.162.1-.08.308a.87.87,0,0,0,.2.249c.008.009.236-.119.216-.156-.04-.075-.1-.318-.158-.5s.015-.648-.075-.664a2.991,2.991,0,0,0-.568-.136c-.031.007-.069.057-.1.11.322-.078.577.739.566.788"
            transform="translate(-137.612 -128.214)"
            fill="#f39392"
          />
          <Path
            id="Path_68026"
            data-name="Path 68026"
            d="M148.544,137a17.07,17.07,0,0,1,.054,2.308c.022.226.8.838,1.023.331s-.492-2.836-.492-2.836a.44.44,0,0,0-.585.2"
            transform="translate(-138.416 -131.427)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68027"
            data-name="Path 68027"
            d="M149.735,138.222a3.158,3.158,0,0,1,.067,1.257.856.856,0,0,1-.155.271c.224.116.472.141.583-.111.223-.507-.492-2.835-.492-2.835a.389.389,0,0,0-.349,0c.269.231.315.931.347,1.421"
            transform="translate(-139.024 -131.429)"
            fill="#f39392"
          />
          <Path
            id="Path_68028"
            data-name="Path 68028"
            d="M139.239,141.451c-.9-.433-1.388-.327-1.5-.129-.3.508.041,1.068.825,1.347a6.19,6.19,0,0,0,2.9.413c.411-.065-.169-.926-.407-1a11.259,11.259,0,0,1-1.816-.63"
            transform="translate(-130.549 -134.591)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68029"
            data-name="Path 68029"
            d="M141.5,145.772a2.4,2.4,0,0,0-.914,0,2.527,2.527,0,0,1-1.486-.291c-.087-.038-.19-.073-.3-.109a1.874,1.874,0,0,0,.605.34,6.188,6.188,0,0,0,2.9.413c.216-.034.158-.288.02-.532a.924.924,0,0,1-.145.1.966.966,0,0,1-.686.08"
            transform="translate(-131.394 -137.634)"
            fill="#f39392"
          />
        </G>
      </G>
      <G
        id="Group_62221"
        data-name="Group 62221"
        transform="translate(15.151 21.611)"
      >
        <G
          id="Group_62220"
          data-name="Group 62220"
          clipPath="url(#clip-path-473)"
        >
          <Path
            id="Path_68030"
            data-name="Path 68030"
            d="M77.283,127.12a.559.559,0,0,0,.309-.26c.1-.251.227-.375.29-.279.031.047-.022.2-.039.354-.015.135.153.073.449.072a2.447,2.447,0,0,1,.923.332c.1.058-.285.094-.6-.036-.385-.16.1.155.082.262a3.31,3.31,0,0,1-.349.538c-.049.087-.512-.115-.715-.165a23.059,23.059,0,0,0-3.1.026s-.52-.015-.437-.76.519-.243.519-.243a14.759,14.759,0,0,0,2.668.16"
            transform="translate(-68.533 -112.793)"
            fill="#ffa9a9"
          />
          <Path
            id="Path_68031"
            data-name="Path 68031"
            d="M77.941,128.815a3.862,3.862,0,0,1,.749.034c.164.039.471.278.64.233.2-.054.26-.514.171-.711-.028-.063-.3-.143-.3-.17.067,0,.148-.011.245-.011a2.446,2.446,0,0,1,.923.332c.1.058-.286.094-.6-.036-.385-.161.1.154.082.262a3.3,3.3,0,0,1-.349.538c-.049.087-.512-.115-.715-.166a23.1,23.1,0,0,0-3.1.027l.046-.564c.34.332,1.787.3,2.212.232"
            transform="translate(-69.683 -113.975)"
            fill="#ffa9a9"
          />
          <Path
            id="Path_68032"
            data-name="Path 68032"
            d="M71.432,114.48c.635.014.909.66,1,1.864a11.355,11.355,0,0,0,.336,1.989c.063.3-.8,1.274-1.115.881a5.1,5.1,0,0,1-1-3.024c-.052-1.009.069-1.726.784-1.711"
            transform="translate(-66.048 -104.097)"
            fill="#fff"
          />
          <Path
            id="Path_68033"
            data-name="Path 68033"
            d="M81.321,173.817c-.123.12-.28.789-.169.912a.613.613,0,0,0,.243.147c.739.283,1.877-.7,2.067-.866.173-.15.348-.482.253-.689a6.6,6.6,0,0,0-2.393.5"
            transform="translate(-73.597 -146.468)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_62223"
        data-name="Group 62223"
        transform="translate(22.66 48.223)"
      >
        <G
          id="Group_62222"
          data-name="Group 62222"
          clipPath="url(#clip-path-474)"
        >
          <Rect
            id="Rectangle_8884"
            data-name="Rectangle 8884"
            width={3.223}
            height={2.765}
            transform="translate(-0.75 0.336) rotate(-26.109)"
            fill="url(#linear-gradient-205)"
          />
        </G>
      </G>
      <G
        id="Group_62225"
        data-name="Group 62225"
        transform="translate(23.603 49.284)"
      >
        <G
          id="Group_62224"
          data-name="Group 62224"
          clipPath="url(#clip-path-475)"
        >
          <Rect
            id="Rectangle_8885"
            data-name="Rectangle 8885"
            width={0.209}
            height={0.27}
            transform="translate(0)"
            fill="url(#linear-gradient-206)"
          />
        </G>
      </G>
      <G
        id="Group_62227"
        data-name="Group 62227"
        transform="translate(15.151 21.611)"
      >
        <G
          id="Group_62226"
          data-name="Group 62226"
          clipPath="url(#clip-path-473)"
        >
          <Path
            id="Path_68036"
            data-name="Path 68036"
            d="M81.455,175a.78.78,0,0,0-.132.661.4.4,0,0,0,.321.157,1.615,1.615,0,0,1,.086-.632l.053-.1-.207-.273Z"
            transform="translate(-73.739 -147.569)"
            fill="#fff"
          />
          <Path
            id="Path_68037"
            data-name="Path 68037"
            d="M81.9,173.649a3.531,3.531,0,0,1-.076.369.2.2,0,0,1,.2-.01.176.176,0,0,1,.073.2,1.013,1.013,0,0,0,.536-.091c.457-.194.538-.458.5-.553-.135-.3-1.1.11-1.231.088"
            transform="translate(-74.11 -146.589)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68038"
            data-name="Path 68038"
            d="M74.644,170.626c-.123.12-.28.789-.169.912a.613.613,0,0,0,.243.147c.739.283,1.877-.7,2.067-.866.173-.15.348-.482.253-.689a6.6,6.6,0,0,0-2.393.5"
            transform="translate(-68.786 -144.169)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_62229"
        data-name="Group 62229"
        transform="translate(20.794 47.331)"
      >
        <G
          id="Group_62228"
          data-name="Group 62228"
          clipPath="url(#clip-path-477)"
        >
          <Rect
            id="Rectangle_8887"
            data-name="Rectangle 8887"
            width={3.223}
            height={2.765}
            transform="translate(-0.75 0.336) rotate(-26.107)"
            fill="url(#linear-gradient-207)"
          />
        </G>
      </G>
      <G
        id="Group_62231"
        data-name="Group 62231"
        transform="translate(21.737 48.392)"
      >
        <G
          id="Group_62230"
          data-name="Group 62230"
          clipPath="url(#clip-path-478)"
        >
          <Rect
            id="Rectangle_8888"
            data-name="Rectangle 8888"
            width={0.209}
            height={0.271}
            fill="url(#linear-gradient-208)"
          />
        </G>
      </G>
      <G
        id="Group_62233"
        data-name="Group 62233"
        transform="translate(15.151 21.611)"
      >
        <G
          id="Group_62232"
          data-name="Group 62232"
          clipPath="url(#clip-path-473)"
        >
          <Path
            id="Path_68041"
            data-name="Path 68041"
            d="M74.778,171.807a.781.781,0,0,0-.132.662.4.4,0,0,0,.321.156,1.614,1.614,0,0,1,.086-.632l.053-.1-.207-.273Z"
            transform="translate(-68.928 -145.269)"
            fill="#fff"
          />
          <Path
            id="Path_68042"
            data-name="Path 68042"
            d="M75.226,170.457a3.606,3.606,0,0,1-.077.369.2.2,0,0,1,.2-.01.176.176,0,0,1,.073.2,1.014,1.014,0,0,0,.536-.091c.457-.194.538-.458.5-.553-.134-.3-1.1.11-1.231.088"
            transform="translate(-69.299 -144.289)"
            fill="#f3a4a3"
          />
        </G>
      </G>
      <G
        id="Group_62235"
        data-name="Group 62235"
        transform="translate(20.761 42.177)"
      >
        <G
          id="Group_62234"
          data-name="Group 62234"
          clipPath="url(#clip-path-480)"
        >
          <Rect
            id="Rectangle_8890"
            data-name="Rectangle 8890"
            width={5.871}
            height={1.928}
            transform="translate(-0.064 5.867) rotate(-89.872)"
            fill="url(#linear-gradient-209)"
          />
        </G>
      </G>
      <G
        id="Group_62237"
        data-name="Group 62237"
        transform="translate(20.411 36.696)"
      >
        <G
          id="Group_62236"
          data-name="Group 62236"
          clipPath="url(#clip-path-481)"
        >
          <Rect
            id="Rectangle_8891"
            data-name="Rectangle 8891"
            width={3.303}
            height={7.277}
            transform="matrix(1, -0.007, 0.007, 1, -0.08, 0)"
            fill="url(#linear-gradient-210)"
          />
        </G>
      </G>
      <G
        id="Group_62239"
        data-name="Group 62239"
        transform="translate(22.465 43.056)"
      >
        <G
          id="Group_62238"
          data-name="Group 62238"
          clipPath="url(#clip-path-482)"
        >
          <Rect
            id="Rectangle_8892"
            data-name="Rectangle 8892"
            width={1.938}
            height={6.067}
            transform="translate(-0.057 0) rotate(-0.207)"
            fill="url(#linear-gradient-211)"
          />
        </G>
      </G>
      <G
        id="Group_62241"
        data-name="Group 62241"
        transform="translate(21.948 37.487)"
      >
        <G
          id="Group_62240"
          data-name="Group 62240"
          clipPath="url(#clip-path-483)"
        >
          <Rect
            id="Rectangle_8893"
            data-name="Rectangle 8893"
            width={3.188}
            height={7.41}
            transform="matrix(1, -0.004, 0.004, 1, -0.16, 0)"
            fill="url(#linear-gradient-212)"
          />
        </G>
      </G>
      <G
        id="Group_62243"
        data-name="Group 62243"
        transform="translate(15.151 21.611)"
      >
        <G
          id="Group_62242"
          data-name="Group 62242"
          clipPath="url(#clip-path-473)"
        >
          <Path
            id="Path_68047"
            data-name="Path 68047"
            d="M75.466,104.11a.749.749,0,0,1,.406-.265.888.888,0,0,1,.546-.044c.168.053.3-.148.388.006s-.038.288.087.412a.664.664,0,0,1,.215.465c-.072.595-.086,1.077-.431,1.125a.9.9,0,0,0-.25.86,5.871,5.871,0,0,1-1.236.119c.577-.735.1-1.484.177-2.331a.753.753,0,0,1,.1-.347"
            transform="translate(-69.329 -96.364)"
            fill="#ffa9a9"
          />
        </G>
      </G>
      <G
        id="Group_62245"
        data-name="Group 62245"
        transform="translate(20.298 28.271)"
      >
        <G
          id="Group_62244"
          data-name="Group 62244"
          clipPath="url(#clip-path-485)"
        >
          <Rect
            id="Rectangle_8895"
            data-name="Rectangle 8895"
            width={4.072}
            height={3.906}
            transform="translate(-1.526 2.316) rotate(-63.263)"
            fill="url(#linear-gradient-213)"
          />
        </G>
      </G>
      <G
        id="Group_62247"
        data-name="Group 62247"
        transform="translate(19.664 31.993)"
      >
        <G
          id="Group_62246"
          data-name="Group 62246"
          clipPath="url(#clip-path-486)"
        >
          <Rect
            id="Rectangle_8896"
            data-name="Rectangle 8896"
            width={5.755}
            height={7.549}
            transform="translate(-0.607 0.013) rotate(-2.368)"
            fill="url(#linear-gradient-214)"
          />
        </G>
      </G>
      <G
        id="Group_62249"
        data-name="Group 62249"
        transform="translate(15.151 21.611)"
      >
        <G
          id="Group_62248"
          data-name="Group 62248"
          clipPath="url(#clip-path-473)"
        >
          <Path
            id="Path_68050"
            data-name="Path 68050"
            d="M74.308,112.97a2.416,2.416,0,0,1,1.119.146.669.669,0,0,1,.4.492l-1.82-.224.112-.27a.237.237,0,0,1,.188-.144"
            transform="translate(-68.476 -102.996)"
            fill="#fff"
          />
          <Path
            id="Path_68051"
            data-name="Path 68051"
            d="M95.369,107.812a.555.555,0,0,0,.11-.385c-.056-.262-.022-.434.084-.391.052.021.094.178.165.312s.166-.025.409-.19a2.426,2.426,0,0,1,.943-.24c.117-.009-.182.236-.512.3-.406.082.164.074.213.17a3.285,3.285,0,0,1,.012.636c.008.1-.485.19-.679.261a13.031,13.031,0,0,0-2.126,2.146s-.571.272-.758.014.1-.777.1-.777,1.591-1.413,2.04-1.859"
            transform="translate(-82.28 -98.648)"
            fill="#f3a4a3"
          />
          <Path
            id="Path_68052"
            data-name="Path 68052"
            d="M95.289,108.592a2.358,2.358,0,0,1,.548-.473c.157-.059.541-.032.655-.163.138-.158-.072-.567-.254-.679-.058-.036-.323.046-.342.028.053-.041.116-.091.2-.145a2.433,2.433,0,0,1,.943-.24c.117-.009-.182.236-.512.3-.406.082.164.074.213.17a3.262,3.262,0,0,1,.012.636c.008.1-.484.19-.679.26a2.294,2.294,0,0,0-.356.188,8.69,8.69,0,0,0-1.77,1.957s-.6.223-.763-.021a.305.305,0,0,1-.018-.391,5.42,5.42,0,0,0,2.128-1.431"
            transform="translate(-82.235 -98.649)"
            fill="#f39392"
          />
          <Path
            id="Path_68053"
            data-name="Path 68053"
            d="M79.593,116.7c.054-.633.717-.865,1.924-.874a11.347,11.347,0,0,0,2.007-.208c.3-.044,1.22.879.808,1.17a5.1,5.1,0,0,1-3.082.8c-1.01-.013-1.718-.179-1.657-.892"
            transform="translate(-72.498 -104.915)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Group_62251"
        data-name="Group 62251"
        transform="translate(0 28.408)"
      >
        <G
          id="Group_62250"
          data-name="Group 62250"
          clipPath="url(#clip-path-488)"
        >
          <Image
            id="Rectangle_8898"
            data-name="Rectangle 8898"
            width={9.502}
            height={11.458}
            transform="translate(3.913 1.433)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAApCAYAAABQgPsBAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIqADAAQAAAABAAAAKQAAAABWYrJ/AAAAWElEQVRYCe3SsREAIQwEsef779kM6VbgQGSXecSemfk2vH/DEe8Gh/QniBCpQLdGiFSgWyNEKtCtESIV6NYIkQp0a4RIBbo1QqQC3RohUoFujRCpQPeaRi4oyANPpsEd9AAAAABJRU5ErkJggg=="
          />
          <Image
            id="Rectangle_8899"
            data-name="Rectangle 8899"
            width={9.502}
            height={11.179}
            transform="translate(3.354 1.992)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIqADAAQAAAABAAAAKAAAAABrApvPAAAAVUlEQVRYCe3SsQ0AIAwEMWD/nYNoPQHF0V0Xmd8zs35454cj3g0d4k8kkogCdhtJRAG7jSSigN1GElHAbiOJKGC3kUQUsNtIIgrYbSQRBew2kogC9gVjYwNN1D5VdwAAAABJRU5ErkJggg=="
          />
          <Image
            id="Rectangle_8900"
            data-name="Rectangle 8900"
            width={9.223}
            height={10.899}
            transform="translate(2.795 2.83)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAnCAYAAACBvSFyAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIaADAAQAAAABAAAAJwAAAAC6yFeaAAAAUklEQVRYCe3SsRHAIBAEMUz/Pb/HwdbwDkRyIYzYZ2bO9rnbD/ju94h+gQSJBFpNkEig1QSJBFpNkEig1QSJBFpNkEig1QSJBFpNkEig1cSvJF60ZgNLy96stgAAAABJRU5ErkJggg=="
          />
        </G>
      </G>
      <G
        id="Group_62253"
        data-name="Group 62253"
        transform="translate(1.751 43.093)"
      >
        <G
          id="Group_62252"
          data-name="Group 62252"
          clipPath="url(#clip-path-489)"
        >
          <Image
            id="Rectangle_8902"
            data-name="Rectangle 8902"
            width={2.236}
            height={8.943}
            transform="translate(7.192 4.913)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAACKADAAQAAAABAAAAIAAAAABH/T2tAAAAI0lEQVQ4EWP8//8/Az7AhE8SJDeqABJCo+EwGg6QEBhO4QAA1noDPV07pU0AAAAASUVORK5CYII="
          />
          <Image
            id="Rectangle_8903"
            data-name="Rectangle 8903"
            width={2.515}
            height={10.62}
            transform="translate(10.266 2.678)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAmCAYAAAAWa7HzAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAACaADAAQAAAABAAAAJgAAAABPGwNOAAAAJklEQVQ4EWP8//8/AyHAREgBSH5U0WgQjKaC0YwwWhaAQoC4sgAAOr0DSRIguP8AAAAASUVORK5CYII="
          />
          <Image
            id="Rectangle_8904"
            data-name="Rectangle 8904"
            width={2.515}
            height={6.707}
            transform="translate(12.782 7.708)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAYCAYAAAAoG9cuAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAACaADAAQAAAABAAAAGAAAAABRCgWpAAAAHklEQVQoFWP8//8/AyHAREgBSH5U0WgQjKYCYjMCAK7sAy1bMdkzAAAAAElFTkSuQmCC"
          />
          <Image
            id="Rectangle_8905"
            data-name="Rectangle 8905"
            width={2.236}
            height={6.707}
            transform="translate(14.179 10.503)"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAYCAYAAADH2bwQAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAACKADAAQAAAABAAAAGAAAAADWrM7qAAAAHklEQVQoFWP8//8/Az7AhE8SJDeqABJCo+EwnMIBAIadAy3QjsCJAAAAAElFTkSuQmCC"
          />
        </G>
      </G>
      <G
        id="Group_62255"
        data-name="Group 62255"
        transform="translate(79.611 26.683)"
      >
        <G
          id="Group_62254"
          data-name="Group 62254"
          clipPath="url(#clip-path-490)"
        >
          <Rect
            id="Rectangle_8907"
            data-name="Rectangle 8907"
            width={15.065}
            height={15.065}
            transform="translate(-6.405 6.405) rotate(-45)"
            fill="url(#linear-gradient-215)"
          />
        </G>
      </G>
      <G
        id="Group_62257"
        data-name="Group 62257"
        transform="translate(79.611 26.68)"
      >
        <G
          id="Group_62256"
          data-name="Group 62256"
          clipPath="url(#clip-path-491)"
        >
          <Rect
            id="Rectangle_8908"
            data-name="Rectangle 8908"
            width={15.17}
            height={14.942}
            transform="matrix(0.68, -0.733, 0.733, 0.68, -6.388, 6.883)"
            fill="url(#linear-gradient-216)"
          />
        </G>
      </G>
      <G
        id="Group_62259"
        data-name="Group 62259"
        transform="translate(79.612 26.68)"
      >
        <G
          id="Group_62258"
          data-name="Group 62258"
          clipPath="url(#clip-path-492)"
        >
          <Rect
            id="Rectangle_8909"
            data-name="Rectangle 8909"
            width={13.682}
            height={15.038}
            transform="translate(-5.486 3.289) rotate(-30.94)"
            fill="url(#linear-gradient-217)"
          />
        </G>
      </G>
      <G
        id="Group_62261"
        data-name="Group 62261"
        transform="translate(80.835 32.035)"
      >
        <G
          id="Group_62260"
          data-name="Group 62260"
          clipPath="url(#clip-path-493)"
        >
          <Rect
            id="Rectangle_8910"
            data-name="Rectangle 8910"
            width={2.398}
            height={0.697}
            transform="matrix(0.027, -1, 1, 0.027, -0.064, 2.38)"
            fill="url(#linear-gradient-218)"
          />
        </G>
      </G>
      <G
        id="Group_62263"
        data-name="Group 62263"
        transform="translate(82.191 31.814)"
      >
        <G
          id="Group_62262"
          data-name="Group 62262"
          clipPath="url(#clip-path-494)"
        >
          <Rect
            id="Rectangle_8911"
            data-name="Rectangle 8911"
            width={3.408}
            height={0.758}
            transform="translate(-0.125 3.382) rotate(-87.89)"
            fill="url(#linear-gradient-219)"
          />
        </G>
      </G>
      <G
        id="Group_62265"
        data-name="Group 62265"
        transform="translate(83.547 31.538)"
      >
        <G
          id="Group_62264"
          data-name="Group 62264"
          clipPath="url(#clip-path-495)"
        >
          <Rect
            id="Rectangle_8912"
            data-name="Rectangle 8912"
            width={4.455}
            height={0.703}
            transform="matrix(0.016, -1, 1, 0.016, -0.069, 4.444)"
            fill="url(#linear-gradient-220)"
          />
        </G>
      </G>
      <G
        id="Group_62267"
        data-name="Group 62267"
        transform="translate(84.903 32.508)"
      >
        <G
          id="Group_62266"
          data-name="Group 62266"
          clipPath="url(#clip-path-496)"
        >
          <Rect
            id="Rectangle_8913"
            data-name="Rectangle 8913"
            width={4.27}
            height={0.716}
            transform="matrix(0.02, -1, 1, 0.02, -0.083, 4.257)"
            fill="url(#linear-gradient-221)"
          />
        </G>
      </G>
      <G
        id="Group_62269"
        data-name="Group 62269"
        transform="translate(86.259 31.341)"
      >
        <G
          id="Group_62268"
          data-name="Group 62268"
          clipPath="url(#clip-path-497)"
        >
          <Rect
            id="Rectangle_8914"
            data-name="Rectangle 8914"
            width={0.634}
            height={6.208}
            transform="translate(0 0)"
            fill="url(#linear-gradient-222)"
          />
        </G>
      </G>
      <G
        id="Group_62271"
        data-name="Group 62271"
        transform="translate(66.285 54.523)"
      >
        <G
          id="Group_62270"
          data-name="Group 62270"
          clipPath="url(#clip-path-498)"
        >
          <Rect
            id="Rectangle_8915"
            data-name="Rectangle 8915"
            width={11.812}
            height={20.026}
            transform="matrix(0.028, -1, 1, 0.028, -0.32, 11.248)"
            fill="url(#linear-gradient-223)"
          />
        </G>
      </G>
      <G
        id="Group_62273"
        data-name="Group 62273"
        transform="translate(64.76 46.934)"
      >
        <G
          id="Group_62272"
          data-name="Group 62272"
          clipPath="url(#clip-path-499)"
        >
          <Path
            id="Path_68063"
            data-name="Path 68063"
            d="M268.224,203.8a4.114,4.114,0,0,0-3.159.045c-.618.309-.784.746-.508,1.119a1.249,1.249,0,0,1,.566-.489,4.115,4.115,0,0,1,3.159-.045,1.374,1.374,0,0,1,.539.4c.193-.362-.006-.759-.6-1.033"
            transform="translate(-255.288 -193.569)"
            fill="#ce7436"
          />
        </G>
      </G>
      <G
        id="Group_62275"
        data-name="Group 62275"
        transform="translate(72.172 57.622)"
      >
        <G
          id="Group_62274"
          data-name="Group 62274"
          clipPath="url(#clip-path-500)"
        >
          <Rect
            id="Rectangle_8917"
            data-name="Rectangle 8917"
            width={8.918}
            height={4.928}
            transform="translate(-0.408)"
            fill="url(#linear-gradient-224)"
          />
        </G>
      </G>
      <G
        id="Group_62277"
        data-name="Group 62277"
        transform="translate(73.297 57.952)"
      >
        <G
          id="Group_62276"
          data-name="Group 62276"
          clipPath="url(#clip-path-501)"
        >
          <Rect
            id="Rectangle_8918"
            data-name="Rectangle 8918"
            width={5.703}
            height={3.393}
            transform="translate(0)"
            fill="url(#linear-gradient-225)"
          />
        </G>
      </G>
      <G
        id="Group_62279"
        data-name="Group 62279"
        transform="translate(73.295 56.345)"
      >
        <G
          id="Group_62278"
          data-name="Group 62278"
          clipPath="url(#clip-path-502)"
        >
          <Rect
            id="Rectangle_8919"
            data-name="Rectangle 8919"
            width={6.245}
            height={3.451}
            transform="translate(-0.286)"
            fill="url(#linear-gradient-226)"
          />
        </G>
      </G>
      <G
        id="Group_62281"
        data-name="Group 62281"
        transform="translate(73.897 56.875)"
      >
        <G
          id="Group_62280"
          data-name="Group 62280"
          clipPath="url(#clip-path-503)"
        >
          <Rect
            id="Rectangle_8920"
            data-name="Rectangle 8920"
            width={4.862}
            height={2.269}
            transform="translate(-0.192)"
            fill="url(#linear-gradient-227)"
          />
        </G>
      </G>
      <G
        id="Group_62283"
        data-name="Group 62283"
        transform="translate(74.201 57.172)"
      >
        <G
          id="Group_62282"
          data-name="Group 62282"
          clipPath="url(#clip-path-504)"
        >
          <Rect
            id="Rectangle_8921"
            data-name="Rectangle 8921"
            width={4.117}
            height={4.117}
            transform="matrix(0.707, -0.707, 0.707, 0.707, -0.986, 0.986)"
            fill="url(#linear-gradient-228)"
          />
        </G>
      </G>
      <G
        id="Group_62285"
        data-name="Group 62285"
        transform="translate(75.003 53.392)"
      >
        <G
          id="Group_62284"
          data-name="Group 62284"
          clipPath="url(#clip-path-505)"
        >
          <Rect
            id="Rectangle_8922"
            data-name="Rectangle 8922"
            width={2.578}
            height={2.489}
            transform="translate(-0.16)"
            fill="url(#linear-gradient-229)"
          />
        </G>
      </G>
    </G>
  </Svg>
  )
}


Icon.displayName = 'InterestSample';

export const InterestSample = memo<IconProps>(themed(Icon));