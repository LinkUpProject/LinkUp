"use strict";
import React, { useState, useEffect, memo } from "react";

import "../../styles/index.css";
import "../../styles/test.css";

const Test = () => {
  return (
    <div className="flex-row page">
      <div className="flex-col group">
        <div className="flex-row header">
          <div className="flex-row iconWrapper">
            <span className="icon">icon</span>
          </div>
          <div className="flex-col group1">
            <div className="flex-row group2">
              <span className="hixxx">Hi,XXX</span>
              <div className="group3">
                <div className="layer" />
              </div>
            </div>
            <span className="title">为自己而投资</span>
          </div>
          <div className="flex-col group4">
            <img
              className="largeIcon"
              src={
                "https://img.alicdn.com/imgextra/i2/O1CN01LDfles1HBLkCdebuG_!!6000000000719-2-tps-128-128.png"
              }
            />
            <span className="word">绝不秃头</span>
          </div>
        </div>
        <span className="invest">Invest in yourself</span>
        <span className="caption">进展</span>
        <div className="flex-row body">
          <div className="flex-col group5">
            <div className="flex-col group6">
              <div className="flex-row group7">
                <div className="flex-col group8">
                  <span className="num">132</span>
                  <span className="info">已完成的进程</span>
                </div>
                <div className="flex-col group9">
                  <img
                    className="icon1"
                    src={
                      "https://img.alicdn.com/imgextra/i2/O1CN01KML37u1JAYHdqsZIp_!!6000000000988-2-tps-76-76.png"
                    }
                  />
                </div>
              </div>
              <img
                className="largeIcon1"
                src={
                  "https://img.alicdn.com/imgextra/i2/O1CN01cjSyoE1PfapABN9dg_!!6000000001868-2-tps-152-152.png"
                }
              />
              <span className="percent">68%</span>
              <div className="flex-row group10">
                <div className="horizontalLine" />
              </div>
            </div>
            <span className="benifit">为你定制</span>
          </div>
          <div className="flex-row group11">
            <div className="flex-col group12">
              <img
                className="icon2"
                src={
                  "https://img.alicdn.com/imgextra/i4/O1CN01SjvjrH24GlbHanZXy_!!6000000007364-2-tps-48-48.png"
                }
              />
              <span className="tag">文化 & 旅行</span>
            </div>
            <div className="flex-col group13">
              <div className="flex-row perWrapper">
                <span className="per">68%</span>
              </div>
              <div className="flex-row group14">
                <div className="overlayer" />
                <div className="layer1" />
              </div>
            </div>
          </div>
          <div className="flex-row group15">
            <div className="flex-col group16">
              <div className="flex-col group17">
                <div className="flex-row group18">
                  <img
                    className="media"
                    src={
                      "https://img.alicdn.com/imgextra/i4/O1CN01Vwxt0g25FDsj2Ew3t_!!6000000007496-2-tps-60-60.png"
                    }
                  />
                  <div className="flex-row perWrapper1">
                    <span className="per1">56%</span>
                  </div>
                </div>
                <span className="word1">法律 & 权益</span>
              </div>
              <div className="overlayer1" />
            </div>
            <div className="overlayer2" />
          </div>
          <div className="flex-row group19">
            <div className="flex-col group20">
              <div className="flex-row group21">
                <img
                  className="figure"
                  src={
                    "https://img.alicdn.com/imgextra/i1/O1CN01UWS40B1rmHqxZIQU1_!!6000000005673-2-tps-48-48.png"
                  }
                />
                <div className="flex-row percentWrapper">
                  <span className="percent1">52%</span>
                </div>
              </div>
              <span className="label">商业 & 创业</span>
            </div>
            <div className="layer2" />
            <div className="mask" />
          </div>
          <div className="flex-row group22">
            <div className="flex-col group23">
              <div className="flex-row group24">
                <div className="flex-col group25">
                  <div className="flex-col block">
                    <span className="label1">7月</span>
                    <span className="label2">一</span>
                    <span className="num1">1</span>
                    <img
                      className="icon3"
                      src={
                        "https://img.alicdn.com/imgextra/i4/O1CN016oYvzR210mw5iro0O_!!6000000006923-2-tps-48-48.png"
                      }
                    />
                  </div>
                  <div className="flex-col block1">
                    <img
                      className="icon4"
                      src={
                        "https://img.alicdn.com/imgextra/i2/O1CN01SxvL221izGXFw1PFc_!!6000000004483-2-tps-48-48.png"
                      }
                    />
                    <span className="num2">22</span>
                  </div>
                </div>
                <div className="flex-col group26">
                  <div className="flex-col block2">
                    <span className="num3">2024</span>
                    <span className="tag1">二</span>
                    <span className="num4">2</span>
                  </div>
                  <span className="num5">9</span>
                  <div className="flex-col block3">
                    <span className="num6">16</span>
                    <div className="circle" />
                  </div>
                  <span className="num7">23</span>
                </div>
                <div className="flex-col group27">
                  <div className="flex-col block4">
                    <div className="flex-row container">
                      <span className="tag2">三</span>
                      <span className="word2">四</span>
                    </div>
                    <div className="flex-row container1">
                      <div className="flex-col wrapper">
                        <div className="flex-col group28">
                          <div className="flex-row view">
                            <span className="num8">3</span>
                          </div>
                          <span className="num9">10</span>
                        </div>
                        <span className="num10">17</span>
                      </div>
                      <div className="flex-col wrapper1">
                        <span className="num11">4</span>
                        <div className="flex-col group29">
                          <div className="flex-row view1">
                            <span className="num12">11</span>
                          </div>
                          <span className="num13">18</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-row block5">
                    <span className="num14">24</span>
                    <span className="num15">25</span>
                  </div>
                </div>
                <div className="flex-col group30">
                  <div className="flex-col block6">
                    <div className="flex-row container2">
                      <span className="word3">五</span>
                      <span className="word4">六</span>
                    </div>
                    <div className="flex-row container3">
                      <div className="flex-col wrapper2">
                        <div className="flex-col group31">
                          <div className="flex-row view2">
                            <span className="num16">5</span>
                          </div>
                          <span className="num17">12</span>
                        </div>
                        <span className="num18">19</span>
                      </div>
                      <div className="flex-col wrapper3">
                        <span className="num19">6</span>
                        <div className="flex-col group32">
                          <div className="flex-row view3">
                            <span className="num20">13</span>
                          </div>
                          <span className="num21">20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-row block7">
                    <span className="num22">26</span>
                    <span className="num23">27</span>
                  </div>
                </div>
              </div>
              <div className="flex-row group33">
                <div className="flex-col group34">
                  <div className="flex-row block8">
                    <span className="numItem0">29</span>
                    <span className="numItem1">30</span>
                    <span className="numItem2">31</span>
                  </div>
                  <div className="flex-row block9">
                    <div className="horizontalLine1" />
                  </div>
                </div>
                <div className="flex-col group35">
                  <div className="flex-row block10">
                    <span className="numItem01">1</span>
                    <span className="numItem11">2</span>
                    <span className="numItem21">3</span>
                  </div>
                  <div className="flex-row block11">
                    <div className="horizontalLine2" />
                  </div>
                </div>
              </div>
              <div className="flex-row group36">
                <div className="flex-row group37">
                  <div className="horizontalLine3" />
                </div>
                <div className="flex-row group38">
                  <div className="circle1" />
                </div>
              </div>
            </div>
            <div className="flex-col group39">
              <img
                className="icon5"
                src={
                  "https://img.alicdn.com/imgextra/i3/O1CN016831gI1MvfsoLZvLH_!!6000000001497-2-tps-32-32.png"
                }
              />
              <span className="label3">日</span>
              <div className="flex-col group40">
                <div className="flex-row group41">
                  <span className="num24">7</span>
                </div>
                <span className="num25">14</span>
              </div>
              <span className="num26">21</span>
              <span className="num27">28</span>
              <span className="num28">4</span>
            </div>
            <img
              className="icon6"
              src={
                "https://img.alicdn.com/imgextra/i1/O1CN01aSUeSw22jVDbborkP_!!6000000007156-2-tps-32-32.png"
              }
            />
          </div>
        </div>
        <div className="flex-row footer">
          <div className="flex-row sectionWrapper">
            <span className="section">Hi，我是你的小助手</span>
          </div>
          <div className="mask1" />
          <div className="flex-col groupItem0">
            <div className="flex-row group42">
              <img
                className="figure1"
                src={
                  "https://img.alicdn.com/imgextra/i3/O1CN01Qj5Wik1ocGL2UuLGD_!!6000000005245-2-tps-64-64.png"
                }
              />
              <div className="flex-row group43">
                <div className="flex-col group44">
                  <span className="savvysam">SavvySam</span>
                  <span className="tag3">知识传播</span>
                </div>
                <span className="label4">6.8K</span>
              </div>
            </div>
            <div className="flex-col group45">
              <span className="detail">
                日记记录 | 每天记录自己的情绪、行为和想法{" "}
              </span>
              <span className="desc">通过回顾日记来识别模式和潜在问题。</span>
              <div className="flex-row group46">
                <img
                  className="iconItem0"
                  src={
                    "https://img.alicdn.com/imgextra/i4/O1CN01YhngIy1q4UMaR9Q7n_!!6000000005442-2-tps-112-32.png"
                  }
                />
                <img
                  className="iconItem1"
                  src={
                    "https://img.alicdn.com/imgextra/i2/O1CN01U8QJJK1zd8s9Td36O_!!6000000006736-2-tps-108-32.png"
                  }
                />
                <img
                  className="iconItem2"
                  src={
                    "https://img.alicdn.com/imgextra/i1/O1CN01v7zU6E1tyJUA45jB0_!!6000000005970-2-tps-104-32.png"
                  }
                />
                <img
                  className="largeIcon2"
                  src={
                    "https://img.alicdn.com/imgextra/i1/O1CN01sB85NF1TuUAMTPjGB_!!6000000002442-2-tps-120-32.png"
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex-col groupItem1">
            <div className="flex-row group47">
              <img
                className="thumbnail"
                src={
                  "https://img.alicdn.com/imgextra/i3/O1CN01rnhOHN1eZNgfq7xzt_!!6000000003885-2-tps-64-64.png"
                }
              />
              <div className="flex-row group48">
                <div className="flex-col group49">
                  <span className="alex">Alex</span>
                  <span className="label5">权益科普</span>
                </div>
                <div className="flex-row group50">
                  <img
                    className="icon7"
                    src={
                      "https://img.alicdn.com/imgextra/i2/O1CN0122mrLt1tQsZWNmZtN_!!6000000005897-2-tps-40-40.png"
                    }
                  />
                  <span className="word5">5.4K</span>
                </div>
              </div>
            </div>
            <div className="flex-col group51">
              <span className="desc1">
                日记记录 | 每天记录自己的情绪、行为和想法{" "}
              </span>
              <span className="detail1">
                通过回顾日记来识别模式和潜在问题。
              </span>
              <div className="flex-row group52">
                <img
                  className="iconItem01"
                  src={
                    "https://img.alicdn.com/imgextra/i2/O1CN01zl9zfT1jz60JvU7RG_!!6000000004618-2-tps-112-32.png"
                  }
                />
                <img
                  className="iconItem11"
                  src={
                    "https://img.alicdn.com/imgextra/i1/O1CN0172cNxv1PtKhmttzwD_!!6000000001898-2-tps-108-32.png"
                  }
                />
                <img
                  className="iconItem21"
                  src={
                    "https://img.alicdn.com/imgextra/i4/O1CN01kNaGaD22NWCxD0bHr_!!6000000007108-2-tps-104-32.png"
                  }
                />
                <img
                  className="largeIcon3"
                  src={
                    "https://img.alicdn.com/imgextra/i1/O1CN01hKputB22gkqKkJHby_!!6000000007150-2-tps-120-32.png"
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex-col groupItem2">
            <div className="flex-row group53">
              <img
                className="media1"
                src={
                  "https://img.alicdn.com/imgextra/i1/O1CN0177NFFA1cAzMVLB4de_!!6000000003561-2-tps-64-64.png"
                }
              />
              <div className="flex-row group54">
                <div className="flex-col group55">
                  <span className="alex1">Alex</span>
                  <span className="tag4">从0-1的创业者</span>
                </div>
                <div className="flex-row group56">
                  <img
                    className="icon8"
                    src={
                      "https://img.alicdn.com/imgextra/i4/O1CN01ZClVmg1Hv9LfGQxiL_!!6000000000819-2-tps-40-40.png"
                    }
                  />
                  <span className="tag5">5.0K</span>
                </div>
              </div>
            </div>
            <div className="flex-col group57">
              <span className="detail2">
                日记记录 | 每天记录自己的情绪、行为和想法{" "}
              </span>
              <span className="desc2">通过回顾日记来识别模式和潜在问题。</span>
              <div className="flex-row group58">
                <img
                  className="iconItem02"
                  src={
                    "https://img.alicdn.com/imgextra/i2/O1CN01zSuvIZ28Uk9OqgkQf_!!6000000007936-2-tps-112-32.png"
                  }
                />
                <img
                  className="iconItem12"
                  src={
                    "https://img.alicdn.com/imgextra/i4/O1CN01FAgxk225NT0hRguho_!!6000000007514-2-tps-108-32.png"
                  }
                />
                <img
                  className="iconItem22"
                  src={
                    "https://img.alicdn.com/imgextra/i2/O1CN01Q97hcZ1neGS6gWFT6_!!6000000005114-2-tps-104-32.png"
                  }
                />
                <img
                  className="largeIcon4"
                  src={
                    "https://img.alicdn.com/imgextra/i1/O1CN01OVEdjw1xmdr6Vn490_!!6000000006486-2-tps-120-32.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
