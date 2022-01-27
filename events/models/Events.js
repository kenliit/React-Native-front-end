import en from "../../common/localization/en";

class Events {
    constructor(id, publisher, host, picture, theme, description, type,
                address, additionalInfo, coordinates, admission, contact,
                forGroup, startDate, endDate, openSchedule,
                )
    {
        this.id = id;
        this.publisher = publisher;
        this.host = host;
        this.picture = picture;
        this.theme = theme;
        this.description = description;
        this.type = type;
        this.additionalInfo = additionalInfo;
        this.address = address;
        this.coordinates =coordinates;
        this.admission = admission;
        this.contact = contact;
        this.forGroup = forGroup;
        this.startDate = startDate;
        this.endDate = endDate;
        this.openSchedule = openSchedule;
    }
    getDisplayDateTimeString () {
        let current = new Date();
        let result = '';
        const startTimeString = `${this.openSchedule.start > 12? this.openSchedule.start - 12: this.openSchedule.start}${this.openSchedule.start > 12? 'PM':'AM'}`
        const endTimeString = `${this.openSchedule.end > 12? this.openSchedule.end - 12: this.openSchedule.end}${this.openSchedule.end > 12? 'PM':'AM'}`

        if (new Date(this.startDate) < current && current < new Date(this.endDate)) {
            result += "Today ";
        } else {
            return `${this.startDate.substring(5)} to ${this.endDate.substring(5)}`
        }

        if (current.getHours() < this.openSchedule.start) {
            result += `start at ${startTimeString}`
        } else if (current.getHours() < this.openSchedule.end) {
            result += `till ${endTimeString}`
        } else {
            result = `Tomorrow at ${startTimeString}`
        }

        return result;
    }
}

export default Events;