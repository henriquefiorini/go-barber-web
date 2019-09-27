import React, { useState, useMemo, useEffect } from 'react';
import _ from 'lodash';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import enUS from 'date-fns/locale/en-US';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import {
  Container,
  Header,
  Title,
  PaginationButton,
  Appointments,
  Appointment,
} from './styles';

import api from '~/services/api';

const workHours = _.range(8, 19);

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [schedule, setSchedule] = useState([]);

  const dateFormatted = useMemo(
    () => format(date, 'MMMM, do', { locale: enUS }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = workHours.map(hour => {
        const hourFormatted = setSeconds(
          setMinutes(setHours(date, hour), 0),
          0
        );

        const appointmentTime = utcToZonedTime(hourFormatted, timezone);

        return {
          time: `${hour}:00h`,
          isPast: isBefore(appointmentTime, new Date()),
          appointment: response.data.find(appointment =>
            isEqual(parseISO(appointment.date), appointmentTime)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <Header>
        <PaginationButton type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={32} />
        </PaginationButton>
        <Title>{dateFormatted}</Title>
        <PaginationButton type="button" onClick={handleNextDay}>
          <MdChevronRight size={32} />
        </PaginationButton>
      </Header>

      <Appointments>
        {schedule &&
          schedule.map(({ isPast, time, appointment }) => (
            <Appointment isPast={isPast} isAvailable={!appointment}>
              <time>{time}</time>
              <small>{appointment ? appointment.user.name : 'Available'}</small>
            </Appointment>
          ))}
      </Appointments>
    </Container>
  );
}
