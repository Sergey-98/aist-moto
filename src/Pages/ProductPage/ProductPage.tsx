import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from "react-router-dom"
import classes from './ProductPage.module.css';
import {data} from '../../data/data';
import { Page } from 'types/types';

export default function ProductPage() {
  const [isEngine, setEngine] = useState(false);
  const [isFuelSystem, setFuelSystem] = useState(false);
  const [isTransmission, setTransmission] = useState(false);
  const [isElectricalEquipment, setElectricalEquipment] = useState(false);
  const [isFrame, setFrame] = useState(false);
  const [isSuspension, setSuspension] = useState(false);
  const [isBrakeSystem, setBrakeSystem] = useState(false);
  const [isOverallDimensions, setOverallDimensions] = useState(false);
  const [isWheelWeight, setWheelWeight] = useState(false);
  const [isExternalLightingDevices, setExternalLightingDevices] = useState(false);
  const [isInstrumentPanel, setInstrumentPanel] = useState(false);
  const [isСargoPlatform, setСargoPlatform] = useState(false);

  useEffect(() => {
    document.title = 'Официальный дилер по продаже складской и строительной техники | АиСТ-С';
  }, []);  
    const {id} = useParams();
    const param = id;
    let dataP: Page = {};
    for (let i = 0; i < data.length; i+=1) {
      const d1 = data[i].pages;
      for (let j = 0; j < d1.length; j+=1) {
        const d2 = d1[j];
        if (d2.url == param) {
          dataP = d2;
        }
      }
    }
    const changeEngine = () => {
      if (isEngine) {
        setEngine(false);
      } else {
        setEngine(true);
      }
    }
    const changeFuelSystem = () => {
      if (isFuelSystem) {
        setFuelSystem(false);
      } else {
        setFuelSystem(true);
      }
    }
    const changeTransmission = () => {
      if (isTransmission) {
        setTransmission(false);
      } else {
        setTransmission(true);
      }
    }
    const changeElectricalEquipment = () => {
      if (isElectricalEquipment) {
        setElectricalEquipment(false);
      } else {
        setElectricalEquipment(true);
      }
    }
    const changeFrame = () => {
      if (isFrame) {
        setFrame(false);
      } else {
        setFrame(true);
      }
    }
    const changeSuspension = () => {
      if (isSuspension) {
        setSuspension(false);
      } else {
        setSuspension(true);
      }
    }
    const changeBrakeSystem = () => {
      if (isBrakeSystem) {
        setBrakeSystem(false);
      } else {
        setBrakeSystem(true);
      }
    }
    const changeOverallDimensions = () => {
      if (isOverallDimensions) {
        setOverallDimensions(false);
      } else {
        setOverallDimensions(true);
      }
    }
    const changeWheelWeight = () => {
      if (isWheelWeight) {
        setWheelWeight(false);
      } else {
        setWheelWeight(true);
      }
    }
    const changeExternalLightingDevices = () => {
      if (isExternalLightingDevices) {
        setExternalLightingDevices(false);
      } else {
        setExternalLightingDevices(true);
      }
    }
    const changeInstrumentPanel = () => {
      if (isInstrumentPanel) {
        setInstrumentPanel(false);
      } else {
        setInstrumentPanel(true);
      }
    }
    const changeСargoPlatform = () => {
      if (isСargoPlatform) {
        setСargoPlatform(false);
      } else {
        setСargoPlatform(true);
      }
    }
    // console.log(dataP.description?.engine.elemDesc);
  return (
    <main className={classes.catalog_product__container}>
        <Helmet>
          {/* <title>{dataP?.titleProduct} | АиСТ-С</title> */}
          <meta
          name="keywords"
          content={`${dataP.titleProduct?.toLowerCase()}, ${dataP.titleProduct?.toLowerCase()} в Саратове, аист-с, aist-c, запчасти для погрузчиков, погрузчики лонкинг в саратове, вилочные погрузчики, погрузчики в саратове, аист-с в саратове, вилочные погрузчики в саратове, купить погрузчики лонкинг в саратове, Бирюзова 22, LONKING`}
          />
          <meta
          name="description"
          content={`Каталог (${dataP?.titleProduct}) - ООО "АиСТ-С" - официальный дилер спецтехники Лонкинг.`}
          />
        </Helmet>
        <h3 className={classes.catalog_product_title}>{dataP?.titleProduct}</h3>
        <div className={classes.catalog_product_wrapper}>
            {
              dataP.mainDescription?.map((elem, id) => {
                return (
                  <div key={id+100} className={classes.catalog_main_desc}>
                    <span className={classes.catalog_main_desc_text}>
                      {elem.desc}
                    </span>
                    <img src = {elem.photo} alt = {dataP?.titleProduct} className={classes.catalog_main_desc_img}/>
                  </div>
                )
              })
            }
          <div className={classes.catalog_product__description_wrapper}>
          <span className={classes.catalog_product__description_title_text}>Технические характеристики</span>
            <div className={classes.catalog_product__description}>
              <div className={classes.catalog_product__description_left}>
                {
                  dataP.description?.engine ? 
                    <div className={classes.catalog_product__description_text}>
                      <span className={classes.catalog_product_elem_title} onClick={changeEngine}>{dataP.description?.engine.title}</span>
                      { isEngine ? 
                        <div className={classes.catalog_product__text_description_columns}>
                          {
                            dataP.description?.engine.elemDesc.map((el) => {
                              return(
                                <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                  <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                  <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                </div>
                              )
                            })
                          }
                        </div> : null
                      } 
                    </div> 
                    : null
                }
                {
                  dataP.description?.fuelSystem ? 
                    <div className={classes.catalog_product__description_text}>
                      <span className={classes.catalog_product_elem_title} onClick={changeFuelSystem}>{dataP.description?.fuelSystem.title}</span>
                      { isFuelSystem ? 
                        <div className={classes.catalog_product__text_description_columns}>
                          {
                            dataP.description?.fuelSystem.elemDesc.map((el) => {
                              return(
                                <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                  <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                  <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                </div>
                              )
                            })
                          }
                        </div> : null
                      } 
                    </div> 
                    : null
                }
                {
                  dataP.description?.transmission ? 
                    <div className={classes.catalog_product__description_text}>
                      <span className={classes.catalog_product_elem_title} onClick={changeTransmission}>{dataP.description?.transmission.title}</span>
                      { isTransmission ? 
                        <div className={classes.catalog_product__text_description_columns}>
                          {
                            dataP.description?.transmission.elemDesc.map((el) => {
                              return(
                                <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                  <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                  <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                </div>
                              )
                            })
                          }
                        </div> : null
                      } 
                    </div> 
                    : null
                }
                {
                  dataP.description?.electricalEquipment ? 
                    <div className={classes.catalog_product__description_text}>
                      <span className={classes.catalog_product_elem_title} onClick={changeElectricalEquipment}>{dataP.description?.electricalEquipment.title}</span>
                      { isElectricalEquipment ? 
                        <div className={classes.catalog_product__text_description_columns}>
                          {
                            dataP.description?.electricalEquipment.elemDesc.map((el) => {
                              return(
                                <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                  <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                  <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                </div>
                              )
                            })
                          }
                        </div> : null
                      } 
                    </div> 
                    : null
                }
                {
                  dataP.description?.frame ? 
                    <div className={classes.catalog_product__description_text}>
                      <span className={classes.catalog_product_elem_title} onClick={changeFrame}>{dataP.description?.frame.title}</span>
                      { isFrame ? 
                        <div className={classes.catalog_product__text_description_columns}>
                          {
                            dataP.description?.frame.elemDesc.map((el) => {
                              return(
                                <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                  <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                  <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                </div>
                              )
                            })
                          }
                        </div> : null
                      } 
                    </div> 
                    : null
                }
                {
                  dataP.description?.suspension ? 
                    <div className={classes.catalog_product__description_text}>
                      <span className={classes.catalog_product_elem_title} onClick={changeSuspension}>{dataP.description?.suspension.title}</span>
                      { isSuspension ? 
                        <div className={classes.catalog_product__text_description_columns}>
                          {
                            dataP.description?.suspension.elemDesc.map((el) => {
                              return(
                                <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                  <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                  <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                </div>
                              )
                            })
                          }
                        </div> : null
                      } 
                    </div> 
                    : null
                }
              </div>
              <div className={classes.catalog_product__description_right}>
                {
                    dataP.description?.brakeSystem ? 
                      <div className={classes.catalog_product__description_text}>
                        <span className={classes.catalog_product_elem_title} onClick={changeBrakeSystem}>{dataP.description?.brakeSystem.title}</span>
                        { isBrakeSystem ? 
                          <div className={classes.catalog_product__text_description_columns}>
                            {
                              dataP.description?.brakeSystem.elemDesc.map((el) => {
                                return(
                                  <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                    <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                    <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                  </div>
                                )
                              })
                            }
                          </div> : null
                        } 
                      </div> 
                      : null
                  }
                  {
                    dataP.description?.overallDimensions ? 
                      <div className={classes.catalog_product__description_text}>
                        <span className={classes.catalog_product_elem_title} onClick={changeOverallDimensions}>{dataP.description?.overallDimensions.title}</span>
                        { isOverallDimensions ? 
                          <div className={classes.catalog_product__text_description_columns}>
                            {
                              dataP.description?.overallDimensions.elemDesc.map((el) => {
                                return(
                                  <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                    <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                    <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                  </div>
                                )
                              })
                            }
                          </div> : null
                        } 
                      </div> 
                      : null
                  }
                  {
                    dataP.description?.wheelWeight ? 
                      <div className={classes.catalog_product__description_text}>
                        <span className={classes.catalog_product_elem_title} onClick={changeWheelWeight}>{dataP.description?.wheelWeight.title}</span>
                        { isWheelWeight ? 
                          <div className={classes.catalog_product__text_description_columns}>
                            {
                              dataP.description?.wheelWeight.elemDesc.map((el) => {
                                return(
                                  <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                    <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                    <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                  </div>
                                )
                              })
                            }
                          </div> : null
                        } 
                      </div> 
                      : null
                  }
                  {
                    dataP.description?.externalLightingDevices ? 
                      <div className={classes.catalog_product__description_text}>
                        <span className={classes.catalog_product_elem_title} onClick={changeExternalLightingDevices}>{dataP.description?.externalLightingDevices.title}</span>
                        { isExternalLightingDevices ? 
                          <div className={classes.catalog_product__text_description_columns}>
                            {
                              dataP.description?.externalLightingDevices.elemDesc.map((el) => {
                                return(
                                  <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                    <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                    <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                  </div>
                                )
                              })
                            }
                          </div> : null
                        } 
                      </div> 
                      : null
                  }
                  {
                    dataP.description?.instrumentPanel ? 
                      <div className={classes.catalog_product__description_text}>
                        <span className={classes.catalog_product_elem_title} onClick={changeInstrumentPanel}>{dataP.description?.instrumentPanel.title}</span>
                        { isInstrumentPanel ? 
                          <div className={classes.catalog_product__text_description_columns}>
                            {
                              dataP.description?.instrumentPanel.elemDesc.map((el) => {
                                return(
                                  <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                    <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                    <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                  </div>
                                )
                              })
                            }
                          </div> : null
                        } 
                      </div> 
                      : null
                  }
                  {
                    dataP.description?.cargoPlatform ? 
                      <div className={classes.catalog_product__description_text}>
                        <span className={classes.catalog_product_elem_title} onClick={changeСargoPlatform}>{dataP.description?.cargoPlatform.title}</span>
                        { isСargoPlatform ? 
                          <div className={classes.catalog_product__text_description_columns}>
                            {
                              dataP.description?.cargoPlatform.elemDesc.map((el) => {
                                return(
                                  <div className={classes.text_description_columns_item_wrapper} key={el.titleElem}>
                                    <div className={classes.text_description_columns_item}>{el.titleElem}</div>
                                    <div className={classes.text_description_columns_item_right}>{el.meaning}</div>
                                  </div>
                                )
                              })
                            }
                          </div> : null
                        } 
                      </div> 
                      : null
                  }
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}