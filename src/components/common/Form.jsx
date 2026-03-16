import React from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function CommonForm({
  formControl,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputByComponent(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      case "date":
        element = (
          <input
            name={getControlItem.name}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            style={{ color: "#fff", backgroundColor: "#000" }}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;

      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, [getControlItem.name]: value })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
              <SelectContent>
                {getControlItem.options && getControlItem.options.length > 0
                  ? getControlItem.options.map((optionItem) => (
                      <SelectItem
                        key={optionItem.id || optionItem._id}
                        value={optionItem.label || optionItem._id}
                      >
                        {optionItem.label || optionItem.name}
                      </SelectItem>
                    ))
                  : null}
              </SelectContent>
            </SelectTrigger>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            rows={8}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            name={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      case "checkbox":
        element = (
          <Checkbox
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            name={getControlItem.name}
            // checked={true}
            onCheckedChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event,
              })
            }
          />
        );
        break;

      case "selects":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, [getControlItem.name]: value })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
              <SelectContent>
                {getControlItem.map((optionItem) => (
                  <SelectItem
                    key={optionItem._id}
                    value={`${optionItem.name} - ${optionItem.address}`}
                  >
                    {`${optionItem.name} - ${optionItem.address}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectTrigger>
          </Select>
        );
        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControl.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponent(controlItem)}
          </div>
        ))}
      </div>
      <Button
        disabled={isBtnDisabled}
        type="submit"
        className="mt-7 w-full bg-blue-600 hover:bg-blue-700"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
