import React from 'react'

const Chart = () => {
  return (
    <div className="rounded bgWhite p-6">
      <h3 className="text-xl font-bold">Sales</h3>
      <div
        className="chart"
        dataType="radial-bar"
        style={{minHeight: "222.66666666666669px"}}
      >
        <div
          id="apexchartsl0z7jd6e"
          className="apexcharts-canvas apexchartsl0z7jd6e apexcharts-themeLight"
          style={{width: "266px", height: "222.66666666666669px"}}
        >
          <svg
            id="SvgjsSvg5484"
            width="266"
            height="222.66666666666669"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev"
            className="apexchartsSvg"
            xmlnsData="ApexChartsNS"
            transform="translate(0, 0)"
            style="background-color: transparent;"
          >
            <g
              id="SvgjsG5486"
              className="apexcharts-inner apexcharts-graphical"
              transform="translate(22.166666666666657, 0)"
            >
              <defs id="SvgjsDefs5485">
                <clipPath id="gridRectMaskl0z7jd6e">
                  <rect
                    id="SvgjsRect5488"
                    width="227.66666666666669"
                    height="223.66666666666669"
                    x="-3"
                    y="-1"
                    rx="0"
                    ry="0"
                    opacity="1"
                    strokeWidth="0"
                    stroke="none"
                    strokeDasharray="0"
                    fill="#fff"
                  ></rect>
                </clipPath>
                <clipPath id="forecastMaskl0z7jd6e"></clipPath>
                <clipPath id="nonForecastMaskl0z7jd6e"></clipPath>
                <clipPath id="gridRectMarkerMaskl0z7jd6e">
                  <rect
                    id="SvgjsRect5489"
                    width="225.66666666666669"
                    height="225.66666666666669"
                    x="-2"
                    y="-2"
                    rx="0"
                    ry="0"
                    opacity="1"
                    strokeWidth="0"
                    stroke="none"
                    strokeDasharray="0"
                    fill="#fff"
                  ></rect>
                </clipPath>
              </defs>
              <g id="SvgjsG5490" className="apexcharts-radialbar">
                <g id="SvgjsG5491">
                  <g id="SvgjsG5492" className="apexcharts-tracks">
                    <g
                      id="SvgjsG5493"
                      className="apexcharts-radialbar-track apexcharts-track"
                      rel="1"
                    >
                      <path
                        id="apexcharts-radialbarTrack-0"
                        d="M 39.60626430053392 151.95630081300817 A 82.24593495934961 82.24593495934961 0 1 1 39.678145867168524 152.08055280316557"
                        fill="none"
                        fillOpacity="1"
                        stroke="rgba(235,234,252,0.85)"
                        strokeOpacity="1"
                        strokeLinecap="round"
                        strokeWidth="13.50508130081301"
                        strokeDasharray="0"
                        className="apexcharts-radialbarArea"
                        dataPathOrig="M 39.60626430053392 151.95630081300817 A 82.24593495934961 82.24593495934961 0 1 1 39.678145867168524 152.08055280316557"
                      ></path>
                    </g>
                  </g>
                  <g id="SvgjsG5495">
                    <g
                      id="SvgjsG5500"
                      className="apexchartsSeries apexcharts-radialSeries"
                      seriesName="seriesx1"
                      rel="1"
                      dataRealIndex="0"
                    >
                      <path
                        id="SvgjsPath5501"
                        d="M 39.60626430053392 151.95630081300817 A 82.24593495934961 82.24593495934961 0 1 1 189.8932002563904 88.16328129444132"
                        fill="none"
                        fillOpacity="0.85"
                        stroke="rgba(56,44,221,0.85)"
                        strokeOpacity="1"
                        strokeLinecap="round"
                        strokeWidth="13.92276422764228"
                        strokeDasharray="0"
                        className="apexcharts-radialbarArea apexcharts-radialbarSlice-0"
                        dataAngle="194"
                        dataValue="54"
                        index="0"
                        j="0"
                        dataPathOrig="M 39.60626430053392 151.95630081300817 A 82.24593495934961 82.24593495934961 0 1 1 189.8932002563904 88.16328129444132"
                      ></path> 
                    </g>
                    <circle
                      id="SvgjsCircle5496"
                      r="60.49339430894311"
                      cx="110.83333333333334"
                      cy="110.83333333333334"
                      className="apexcharts-radialbar-hollow"
                      fill="transparent"
                    ></circle>
                    <g
                      id="SvgjsG5497"
                      className="apexchartsDatalabels-group"
                      transform="translate(0, 0) scale(1)"
                      style="opacity: 1;"
                    > 
                      <text
                        id="SvgjsText5498"
                        fontFamily="Helvetica, Arial, sansSerif"
                        x="110.83333333333334"
                        y="110.83333333333334"
                        textAnchor="middle"
                        dominant-baseline="auto"
                        fontSize="24"
                        fontWeight="600"
                        fill="#373d3f"
                        className="apexcharts-text apexchartsDatalabelLabel"
                        style="fontFamily: Helvetica, Arial, sansSerif;"
                      >
                        $16,250
                      </text>
                      <text
                        id="SvgjsText5499"
                        fontFamily="Helvetica, Arial, sansSerif"
                        x="110.83333333333334"
                        y="142.83333333333334"
                        textAnchor="middle"
                        dominant-baseline="auto"
                        fontSize="14px"
                        fontWeight="400"
                        fill="#373d3f"
                        className="apexcharts-text apexchartsDatalabel-value"
                        style="fontFamily: Helvetica, Arial, sansSerif;"
                      >
                        Total Payments
                      </text>
                    </g>
                  </g>
                </g>
              </g> 
              <line
                id="SvgjsLine5502"
                x1={0}
                y1={0}
                x2="221.66666666666669"
                y2={0}
                stroke="#b6b6b6"
                strokeDasharray={0}
                strokeWidth={1}
                strokeLinecap="butt"
                className="apexcharts-ycrosshairs"
              ></line>
              <line
                id="SvgjsLine5503"
                x1="0"
                y1="0"
                x2="221.66666666666669"
                y2="0"
                strokeDasharray="0"
                strokeWidth="0"
                strokeLinecap="butt"
                className="apexcharts-ycrosshairs-hidden"
              ></line>
            </g>
            <g id="SvgjsG5487" className="apexchartsAnnotations"></g>
          </svg>
          <div className="apexchartsLegend"></div>
        </div>
      </div>
    </div>
  )
}

export default Chart
