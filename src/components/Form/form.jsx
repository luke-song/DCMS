import { useState } from 'react'
import { connect } from '@tableland/sdk'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { formState, hashCode, jsonState } from '../Atom/atom'
import CMSInput from '../CMSInput'
import CMSButton from '../CMSButton'
import { v4 as uuidv4 } from 'uuid'
import { Buffer } from 'buffer'
import { useQuery } from '@tanstack/react-query'
window.Buffer = Buffer

/**
 *  An object with form data.
 * eg.
 *
 * project_data: [
 * 	{ parameter: 'name', type: 'String', value: 'John Doe' },
 * 	{ parameter: 'user_avatar', type: 'File', value: 'file_url' },
 * ],
 * user_id: 'polygon_mumbai_address','
 */

const PropertyType = Object.freeze({ STRING: 'STRING', FILE: 'FILE' })

function FormValueSelector({ propertyData, handleChange, onDelete }) {
  const { name = '', type = PropertyType.STRING, value = '' } =
    propertyData || {}
  const [propertyType, setPropertyType] = useState(type)

  const onChange = (e) => {
    const { name, value, files } = e.target
    handleChange({ ...propertyData, [name]: files ? files[0] : value })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: '1rem',
      }}
    >
      <CMSInput
        type="text"
        name="name"
        placeholder="property_name"
        onChange={onChange}
        defaultValue={name}
      />
      <select
        name="type"
        onChange={(e) => {
          setPropertyType(e.target.value)
          onChange(e)
        }}
        defaultValue={type}
      >
        <option value={PropertyType.STRING}>String</option>
        <option value={PropertyType.FILE}>Image / File</option>
      </select>
      {propertyType === PropertyType.STRING && (
        <CMSInput
          onChange={onChange}
          name="value"
          type="text"
          placeholder="property_value"
          defaultValue={value}
        />
      )}
      {propertyType === PropertyType.FILE && (
        <CMSInput type="file" name="value" onChange={onChange} />
      )}
      <CMSButton onClick={onDelete}>Delete</CMSButton>
    </div>
  )
}

async function getUserPorjects(
  wallet_address = '0x0000000000000000000000000000000000000000',
) {
  const tableland = await connect({
    network: 'testnet',
    chain: 'polygon-mumbai',
  })
  const res = await tableland.read(
    `SELECT * FROM cms_table_80001_2622 WHERE user_id == "${wallet_address}";`,
  )
  return res.rows
}

export default function Form() {
  const [formState, setFormState] = useState([])
  const { data, isLoading, status } = useQuery(
    ['project_count'],
    getUserPorjects,
  )
  return (
    <>
      {formState.map((propertyData, index) => (
        <FormValueSelector
          handleChange={(updatedPropertyData) => {
            setFormState((prevState) => {
              const newState = [...prevState]
              newState[index] = updatedPropertyData
              return newState
            })
          }}
          key={propertyData.id}
          propertyData={propertyData}
          onDelete={() => {
            console.log(index)
            setFormState(removeItemAtIndex(formState, index))
          }}
        />
      ))}
      <CMSButton
        onClick={() => {
          setFormState([
            ...formState,
            { name: '', type: PropertyType.STRING, value: '', id: uuidv4() },
          ])
        }}
      >
        +
      </CMSButton>
      <CMSButton
        onClick={async () => {
          try {
            insertData(
              uuidv4(),
              '0x0000000000000000000000000000000000000000',
              formState,
            )
          } catch (e) {
            console.log(e)
          }
        }}
      >
        Submit
      </CMSButton>
    </>
  )
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

async function insertData(projectId, userId, formData) {
  const tableland = await connect({
    network: 'testnet',
    chain: 'polygon-mumbai',
  })
  console.log('tableland: ', tableland)
  const signature = await tableland.siwe()
  console.log('signature: ', signature)

  const tableName = `cms_table_80001_2622`

  const writeRes = await tableland.write(
    `INSERT INTO ${tableName} (id, user_id, project_data) VALUES ('${projectId}', '${userId}', '${JSON.stringify(
      formData,
    )}');`,
  )

  console.log(writeRes)
}

async function readData() {
  const tableland = await connect({
    network: 'testnet',
    chain: 'polygon-mumbai',
  })
  const readRes = await tableland.read(`SELECT * FROM cms_table_80001_2622;`)
}

async function createTableLandTable() {
  const tableland = await connect({
    network: 'testnet',
    chain: 'polygon-mumbai',
  })
  await tableland.siwe()
  const { name } = await tableland.create(
    `id text, user_id text, project_data text, primary key (id)`,
    {
      prefix: `cms_table`,
    },
  )
  console.log(name)
}
