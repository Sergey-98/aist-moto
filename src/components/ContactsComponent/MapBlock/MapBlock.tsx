import React from 'react';
import classes from './MapBlock.module.css';
import { YMaps, Map, Placemark, FullscreenControl } from '@pbe/react-yandex-maps';

export default function MapBlock() {
  const coordinates = [51.569315, 46.031589];
  return (
    <section className={classes.map__container}>
      {/* TODO: раскомментировать YMAPS и импорт*/}
      <YMaps query={{ lang: 'ru_RU', apikey: '84779ca3-954b-46a7-bba5-adbad57a9812' }}>
        <div className={classes.map__board}>
          <Map
            defaultState={{ center: coordinates, zoom: 16 }}
            width={'40vw'}
            height={'60vh'}
            className={classes.map}
          >
            <FullscreenControl options={{ float: 'right' }} />
            <Placemark
              geometry={coordinates}
              properties={{
                hintContent: 'ул.Бирюзова, 22Б',
                balloonContent: 'г.Саратов, ул.Бирюзова, 22Б (Аист-С)',
              }}
              modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            />
          </Map>
        </div>
      </YMaps>
    </section>
  );
}
