import React, {useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
// Components
import Buttons from './Buttons';
import ProductInfo from './ProductInfo';
import SelectWeight from './Modals/SelectWeight';
import EnterWeight from './EnterWeight';
import SlideToRight from '../../Animations/SlideToRight';
// Redux
import {connect} from 'react-redux';

const Product = () => {
  const [selectWeightModal, setSelectWeightModal] = useState(false);
  const [enterWeight, setEnterWeight] = useState(false);
  const [hideEnterWeight, setHideEnterWeight] = useState(true);
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={selectWeightModal}>
        <SelectWeight setSelectWeightModal={setSelectWeightModal} />
      </Modal>
      <Buttons
        setSelectWeightModal={setSelectWeightModal}
        setEnterWeight={setEnterWeight}
        hideEnterWeight={hideEnterWeight}
        setHideEnterWeight={setHideEnterWeight}
      />
      <SlideToRight />
      {enterWeight && <EnterWeight hideEnterWeight={hideEnterWeight} />}
      <ProductInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: 170,
    height: 30,
    marginRight: 10,
    backgroundColor: '#1F88C5',
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
  },
});

const mapStateToProps = state => ({
  product: state.singleProduct,
});

export default connect(mapStateToProps, null)(Product);
