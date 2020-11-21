import { Dispatch, SetStateAction, useState } from "react"
import {
  AiOutlineClose,
  AiOutlineEdit,
  AiOutlineSave,
  AiOutlineSend,
} from "react-icons/ai"
import NumberFormat from "react-number-format"
import Button from "../base/button"

const Code = ({
  code: savedCode,
  setCode: setSavedCode,
}: {
  code: number
  setCode: Dispatch<SetStateAction<number>>
}) => {
  const [editing, setEditing] = useState(false)

  const [code, setCode] = useState<undefined | number>(savedCode)

  const handleChange = ({ value }) => setCode(value)

  const validCode = code?.toString().length === 10

  const handleEdit = () => setEditing(true)
  const handleCancel = () => {
    setCode(savedCode)
    setEditing(false)
  }
  const handleSave = () => {
    setSavedCode(code)
    setEditing(false)
  }

  return (
    <div className="w-full flex justify-between items-center px-1.5 py-1 rounded-t-md bg-custom-primary">
      <NumberFormat
        className={`w-full mr-3 rounded-md ${
          editing ? "text-custom-primary" : "text-white"
        } text-xl text-center`}
        name="code"
        format="##########"
        mask=" ·"
        value={code}
        onValueChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && validCode && handleSave()}
        disabled={!editing}
      />

      {editing ? (
        <div className="flex items-center">
          {validCode && (
            <Button disableShadow onClick={handleSave} icon>
              <AiOutlineSave size={25} />
            </Button>
          )}

          <Button disableShadow onClick={handleCancel} icon>
            <AiOutlineClose size={25} />
          </Button>
        </div>
      ) : (
        <Button disableShadow onClick={handleEdit} icon>
          <AiOutlineEdit size={25} />
        </Button>
      )}
    </div>
  )
}

export default Code
