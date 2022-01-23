import moment from "moment";
import "moment/locale/es";
export default {
    methods: {
        capitalize(string) {
            if (string) {
                if (string.indexOf("_") !== -1) {
                    const strings = string.split("_");
                    let value = "";

                    strings.forEach((item, index) => {
                        if (index === 0) {
                            value = value + item.charAt(0).toUpperCase() + item.slice(1);
                        } else {
                            if (item !== "ent") {
                                value =
                                    value + " " + item.charAt(0).toUpperCase() + item.slice(1);
                            } else {
                                value =
                                    value +
                                    " " +
                                    item.charAt(0).toUpperCase() +
                                    item.slice(1) +
                                    ".";
                            }
                        }
                    });

                    return value;
                } else {
                    return string.charAt(0).toUpperCase() + string.slice(1);
                }
            }

            return string;
        },
        getCurrentDate() {
            const publishDate = moment.now();
            return moment(publishDate.toString(), "x").format(
                "yyyy-MM-DD HH:mm:ss"
            );
        },
        getDateFormate(date) {
            const dateTimeAgo = moment(date).fromNow();
            return dateTimeAgo === "hace unos segundos" ?
                "Justo ahora" :
                this.capitalize(dateTimeAgo.toString());
        },
    },
}