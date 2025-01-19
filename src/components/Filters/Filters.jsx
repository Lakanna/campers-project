import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import css from './Filters.module.css';
import Icon from '../Icon/Icon.jsx';

import { capitalizeFirstLetter } from '../../services/helpers.js';
import { FEATURE_KEYS } from '../../constants/campers.js';
// import { VEHICLE_TYPE } from '../../constants/campers.js';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filtersSlice.js';
import { useId } from 'react';
import Button from '../Button/Button.jsx';

export default function Filters() {
  const dispatch = useDispatch();

  const vanId = useId();
  const fullyId = useId();
  const alcoveId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(setFilters(values));
    actions.resetForm();
  };

  const locationValidation = /^[A-Za-z\s]+,\s[A-Za-z\s]+$/;

  return (
    <Formik
      initialValues={{
        location: '',
        form: '',
        equipment: [],
      }}
      validationSchema={Yup.object({
        location: Yup.string().matches(
          locationValidation,
          'Location must be in the format: "Country, City"',
        ),
      })}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className={css.inputContainer}>
            <label htmlFor="location" className={css.inputLabel}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <Field
                id="location"
                name="location"
                type="text"
                placeholder="Ukraine, Kyiv"
                className={css.input}
              />
              <Icon id="Map" width={20} height={20} className={css.mapIcon} />
            </div>
            <ErrorMessage
              name="location"
              component="div"
              className={css.error}
            />
          </div>

          <div>
            <p className={css.filtersLabel}>Filters</p>
            {/* Список кастомних чекбоксів */}
            <div>
              <h3 className={css.filtersName}>Vehicle equipment</h3>
              <FieldArray
                name="equipment"
                render={(arrayHelpers) => (
                  <ul className={css.iconsContainer}>
                    {FEATURE_KEYS.map((feature, idx) => {
                      const isSelected = values.equipment.includes(feature);

                      return (
                        <li
                          key={idx}
                          className={`${css.featureLi} ${
                            isSelected ? css.selected : ''
                          }`}
                          onClick={() => {
                            if (isSelected) {
                              // Видалення значення з масиву
                              arrayHelpers.remove(
                                values.equipment.indexOf(feature),
                              );
                            } else {
                              // Додавання значення до масиву
                              arrayHelpers.push(feature);
                            }
                          }}
                        >
                          <Icon id={feature} width={32} height={32} />
                          <span>{capitalizeFirstLetter(feature)}</span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              />
            </div>

            <div>
              <h3 className={css.filtersName}>Vehicle type</h3>
              <ul className={css.iconsContainer}>
                {/* {VEHICLE_TYPE.map((type, idx) => (
                  <li key={idx} className={css.featureLi}>
                    <Field
                      type="radio"
                      name="form"
                      id={`vehicle-${idx}`}
                      value={type}
                      className={css.hiddenRadio}
                    />
                    <label htmlFor={`vehicle-${idx}`} className={css.label}>
                      <Icon id={type} width={32} height={32} />
                      {capitalizeFirstLetter(type).replace(
                        /([a-z])([A-Z])/g,
                        '$1 $2',
                      )}
                    </label>
                  </li>
                ))} */}
                <li className={css.featureLi}>
                  <Field
                    type="radio"
                    name="form"
                    id={vanId}
                    value="panelTruck"
                    className={css.hiddenRadio}
                  />
                  <label htmlFor={vanId} className={css.label}>
                    <Icon id="van" width={32} height={32} />
                    Van
                  </label>
                </li>

                <li className={css.featureLi}>
                  <Field
                    type="radio"
                    name="form"
                    id={fullyId}
                    value="fullyIntegrated"
                    className={css.hiddenRadio}
                  />
                  <label htmlFor={fullyId} className={css.label}>
                    <Icon id="fullyIntegrated" width={32} height={32} />
                    <p>Fully</p>
                    <p>Integrated</p>
                  </label>
                </li>

                <li className={css.featureLi}>
                  <Field
                    type="radio"
                    name="form"
                    id={alcoveId}
                    value="alcove"
                    className={css.hiddenRadio}
                  />
                  <label htmlFor={alcoveId} className={css.label}>
                    <Icon id="alcove" width={32} height={32} />
                    Alcove
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <Button text="Search" type="submit" className={css.button} />
        </Form>
      )}
    </Formik>
  );
}
