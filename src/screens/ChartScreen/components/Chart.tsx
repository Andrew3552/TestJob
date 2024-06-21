import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LineChart, YAxis } from 'react-native-svg-charts';
import { Svg, Path } from 'react-native-svg';
import * as shape from 'd3-shape';
import Icon from 'react-native-vector-icons/EvilIcons';

const LineChartComponent = () => {
  const data = [
    1.5, 1.75, 1.65, 1.85, 1.8, 2, 1.9, 1.95, 1.75, 1.8, 1.45, 1.85, 1.85,
  ];
  const labels = ['2017', '2020', '2024'];
  const yAxisData = [1.0, 1.5, 2.0, 2.5];

  const [selectedPoint, setSelectedPoint] = useState(null);
  const [latestPoint] = useState({
    value: data[data.length - 1],
    index: data.length - 1,
  });

  const handleTouch = ({ nativeEvent }) => {
    const { locationX } = nativeEvent;
    const index = Math.floor((locationX / 350) * data.length);
    const value = data[index];
    if (value) {
      setSelectedPoint({ value, index });
    }
  };

  const calculateDifference = (point) => {
    if (!point) return { text: '', difference: 0 };
    const { value, index } = point;
    const previousValue = data[index - 1] || data[0];
    const difference = value - previousValue;
    const percentage = ((difference / previousValue) * 100).toFixed(2);
    const text = `${difference.toFixed(2)} (${percentage}%)`;
    return { text, difference };
  };

  const differenceInfo = calculateDifference(selectedPoint || latestPoint);
  const iconName = differenceInfo.difference >= 0 ? 'arrow-up' : 'arrow-down';
  const iconColor = differenceInfo.difference >= 0 ? 'green' : 'red';
  const textColor = differenceInfo.difference >= 0 ? 'green' : 'red';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoContainer}>
          <Text style={styles.price}>{`${(selectedPoint
            ? selectedPoint.value
            : latestPoint.value
          ).toFixed(4)} Kč`}</Text>
          <View style={styles.differenceContainer}>
            <Icon
              name={iconName}
              size={14}
              color={iconColor}
              style={styles.icon}
            />
            <Text style={{ color: textColor }}>{differenceInfo.text}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.date}>Apr 25, 2024</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', height: 200, paddingVertical: 16 }}>
        <YAxis
          data={yAxisData}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: 'rgb(127, 136, 151)',
            fontSize: 12,
            textAnchor: 'start',
            alignmentBaseline: 'middle',
            dx: -23,
          }}
          numberOfTicks={4}
          formatLabel={(value) => {
            if (value === 2.0 || value === 2.5) {
              return `${value.toFixed(2)} Kč`;
            }
            return value.toFixed(2);
          }}
          style={styles.yAxis}
        />
        <View
          style={{ flex: 1 }}
          onTouchMove={handleTouch}
          onTouchStart={handleTouch}
          onTouchEnd={() => setSelectedPoint(null)}
        >
          <LineChart
            style={{ flex: 1 }}
            data={data}
            svg={{ stroke: 'rgb(219, 10, 53)', strokeWidth: 2 }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveLinear}
          >
            <Svg style={styles.verticalLinesContainer}>
              {data.map((item, index) => (
                <Path
                  key={index}
                  d={`M${index * (350 / (data.length - 1))} 0 V200`}
                  stroke="rgb(223, 225, 230)"
                  strokeWidth="1"
                  strokeDasharray="4, 3"
                />
              ))}
            </Svg>
          </LineChart>
        </View>
      </View>
      <View style={styles.horizontalLabels}>
        {labels.map((label, index) => (
          <Text
            key={index}
            style={[
              styles.horizontalLabel,
              index === 0 ? { marginLeft: 50 } : null,
            ]}
          >
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  infoContainer: {
    borderRadius: 5,
  },
  differenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: 'rgb(16, 24, 33)',
    fontSize: 20,
    fontWeight: 600,
  },
  date: {
    color: 'rgb(127, 136, 151)',
    fontSize: 12,
    fontWeight: 400,
  },
  icon: {
    marginRight: 5,
  },
  horizontalLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: 350,
    paddingHorizontal: 16,
  },
  horizontalLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: 'rgb(127, 136, 151)',
  },
  verticalLinesContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 20,
    left: 0,
    right: 0,
  },
});

export default LineChartComponent;
