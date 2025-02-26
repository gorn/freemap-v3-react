import React from 'react';
import { connect } from 'react-redux';
import { smoothElevations, distance } from 'fm3/geoutils';
import { withTranslator, Translator } from 'fm3/l10nInjector';
import { RootState } from 'fm3/storeCreator';

type Props = ReturnType<typeof mapStateToProps> & {
  t: Translator;
};

const TrackViewerDetails: React.FC<Props> = ({
  startPoints,
  finishPoints,
  trackGeojson,
  eleSmoothingFactor,
  language,
  t,
}) => {
  if (!trackGeojson) {
    return null;
  }

  const oneDecimalDigitNumberFormat = Intl.NumberFormat(language, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const noDecimalDigitsNumberFormat = Intl.NumberFormat(language, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const timeFormat = new Intl.DateTimeFormat(language, {
    hour: 'numeric',
    minute: '2-digit',
  });

  const tableData: [string, string][] = [];

  let startTime: Date | undefined;
  let finishTime: Date | undefined;

  if (startPoints.length) {
    startTime = startPoints[0].startTime;
    if (startTime) {
      tableData.push(['startTime', timeFormat.format(startTime)]);
    }
  }

  if (finishPoints.length) {
    finishTime = finishPoints[0].finishTime;
    if (finishTime) {
      tableData.push(['finishTime', timeFormat.format(finishTime)]);
    }
  }

  let duration = 0;
  if (startTime && finishTime) {
    duration = (finishTime.getTime() - startTime.getTime()) / 1000;
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration - hours * 3600) / 60);
    tableData.push([
      'duration',
      t('trackViewer.details.durationValue', { h: hours, m: minutes }),
    ]);
  }

  if (finishPoints.length) {
    const { lengthInKm } = finishPoints[0];
    tableData.push([
      'distance',
      `${oneDecimalDigitNumberFormat.format(lengthInKm)} km`,
    ]);

    if (duration) {
      const avgSpeed = (lengthInKm / duration) * 3600;
      tableData.push([
        'avgSpeed',
        `${oneDecimalDigitNumberFormat.format(avgSpeed)} km/h`,
      ]);
    }
  }

  const { geometry } = trackGeojson.features[0];

  if (geometry.type !== 'LineString') {
    return null; // TODO log error?
  }

  let minEle = Infinity;
  let maxEle = -Infinity;
  let uphillEleSum = 0;
  let downhillEleSum = 0;
  const smoothed = smoothElevations(geometry.coordinates, eleSmoothingFactor);
  let [prevCoord] = smoothed;

  smoothed.forEach(coord => {
    const distanceFromPrevPointInMeters = distance(
      coord[1],
      coord[0],
      prevCoord[1],
      prevCoord[0],
    );

    if (10 * eleSmoothingFactor < distanceFromPrevPointInMeters) {
      // otherwise the ele sums are very high
      const ele = coord[2];
      if (ele < minEle) {
        minEle = ele;
      }
      if (maxEle < ele) {
        maxEle = ele;
      }

      const eleDiff = ele - prevCoord[2];
      if (eleDiff < 0) {
        downhillEleSum += eleDiff * -1;
      } else if (eleDiff > 0) {
        uphillEleSum += eleDiff;
      }
      prevCoord = coord;
    }
  });

  if (minEle !== Infinity) {
    tableData.push([
      'minEle',
      `${noDecimalDigitsNumberFormat.format(minEle)} ${t('general.masl')}`,
    ]);
  }

  if (maxEle !== -Infinity) {
    tableData.push([
      'maxEle',
      `${noDecimalDigitsNumberFormat.format(maxEle)} ${t('general.masl')}`,
    ]);
  }

  tableData.push([
    'uphill',
    `${noDecimalDigitsNumberFormat.format(uphillEleSum)} m`,
  ]);

  tableData.push([
    'downhill',
    `${noDecimalDigitsNumberFormat.format(downhillEleSum)} m`,
  ]);

  return (
    <dl className="trackInfo dl-horizontal">
      {tableData.map(([key, value]) => [
        <dt key={`${key}-dt`}>{t(`trackViewer.details.${key}`)}:</dt>,
        <dd key={`${key}-dd`} className="infoValue">
          {value}
        </dd>,
      ])}
    </dl>
  );
};

const mapStateToProps = (state: RootState) => ({
  startPoints: state.trackViewer.startPoints,
  finishPoints: state.trackViewer.finishPoints,
  trackGeojson: state.trackViewer.trackGeojson,
  eleSmoothingFactor: state.main.eleSmoothingFactor,
  language: state.l10n.language,
});

export default connect(mapStateToProps)(withTranslator(TrackViewerDetails));
