import React, { useState, useRef, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Rating } from '@mui/material';

import { MapDialogProps } from './MapDialog.types';

import { Box, Label, PlaceWrapper, MapSearchInput, SearchButton } from '../AccompanyForm.styles';
import { dialogStyles } from '../../../../shared/components/modals/common/Dialog.styles';
import {
  MapModalContainer,
  SearchBox,
  DetailedBox,
  RatingBox,
  MapBox,
  mapContainerStyle,
} from './MapDialog.styles';

import { GoogleMap, Marker } from '@react-google-maps/api';
import useGoogle from 'react-google-autocomplete/lib/usePlacesAutocompleteService';

export const MapDialog = ({
  setLocationInfo,
  isOpen,
  isCloseBackgroundClick,
  handleClose,
  handleConfirm,
}) => {
  const APIKey = 'AIzaSyAqKCB391AenPrVmJmA3s_dWTdAazw0FOA';

  const { placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    useGoogle({
      apiKey: APIKey,
    });

  const [center, setCenter] = useState({ lat: 37.5663, lng: 126.9779 });
  const [searchText, setSearchText] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [detailedItem, setDetailedItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [zoom, setZoom] = useState(13);

  const handlePlaceSelect = (selectedItem) => {
    //setMap(selectedItem.description);
    console.log('selectedItem', selectedItem);
    placesService?.getDetails(
      {
        placeId: selectedItem.place_id,
      },
      (placeDetails) => {
        setCenter({
          lat: placeDetails.geometry.location.lat(),
          lng: placeDetails.geometry.location.lng(),
        });
        setDetailedItem(placeDetails);

        var leng = placeDetails.address_components.length - 1;
        setLocationInfo({
          location_id: selectedItem.place_id,
          country: leng > 2 ? placeDetails?.address_components[leng]?.long_name : '',
          city: leng > 2 ? placeDetails?.address_components[leng - 1]?.long_name : '',
          latitude: placeDetails.geometry.location.lat(),
          longitude: placeDetails.geometry.location.lng(),
          name: selectedItem?.structured_formatting?.main_text,
          address: placeDetails?.formatted_address,
        });
        console.log('placeDetails', placeDetails);
      }
    );
    setSelectedItem(selectedItem);
    setZoom(20);
  };

  useEffect(() => {
    setLoading(isPlacePredictionsLoading);
  }, [isPlacePredictionsLoading]);

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="select-list-dialog-title"
        aria-describedby="select-list-dialog-description"
        onClose={isCloseBackgroundClick ? handleClose : () => {}}
        PaperProps={{
          sx: {
            ...dialogStyles.layout,
            width: '70%',
            maxWidth: '1200px',
          },
        }}
      >
        {/* <DialogTitle id="select-list-dialog-title" sx={dialogStyles.title}>
          <div style={dialogStyles.titleContainer}>
            <div>{title}</div>
            <div>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={dialogStyles.closeIconButton}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </DialogTitle> */}

        <DialogContent style={dialogStyles.noMessage} sx={{ padding: 0 }}>
          <MapModalContainer>
            <SearchBox>
              <Box style={{ marginBottom: 0 }}>
                <Label style={{ fontSize: 23 }}>동행 장소 검색</Label>
                <PlaceWrapper>
                  <MapSearchInput
                    type="text"
                    placeholder=""
                    value={searchText}
                    onChange={(evt: any) => {
                      setSearchText(evt.target.value);
                    }}
                  />
                  <SearchButton onClick={(e) => getPlacePredictions({ input: searchText })}>
                    검색하기
                  </SearchButton>
                </PlaceWrapper>
              </Box>

              {!loading && (
                <List style={{ maxHeight: '490px', overflowY: 'auto' }}>
                  {placePredictions.map((item) => (
                    <div key={item.description}>
                      <ListItemButton
                        onClick={() => handlePlaceSelect(item)}
                        sx={{
                          backgroundColor: selectedItem === item ? '#efefef' : 'inherit',
                        }}
                      >
                        <ListItemText primary={item?.structured_formatting?.main_text} />
                      </ListItemButton>

                      {selectedItem === item && detailedItem ? (
                        <DetailedBox>
                          {detailedItem?.user_ratings_total !== undefined ? (
                            <RatingBox>
                              <Rating
                                value={Number(detailedItem?.rating)}
                                precision={0.5}
                                style={{ marginRight: 10 }}
                                readOnly
                              />
                              <div>({detailedItem?.user_ratings_total})</div>
                            </RatingBox>
                          ) : null}
                          <div>{detailedItem?.formatted_address}</div>
                        </DetailedBox>
                      ) : null}
                    </div>
                  ))}
                </List>
              )}
            </SearchBox>

            <MapBox>
              <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={zoom}>
                <Marker position={center} />
              </GoogleMap>
            </MapBox>
          </MapModalContainer>
        </DialogContent>
      </Dialog>
    </div>
  );
};
