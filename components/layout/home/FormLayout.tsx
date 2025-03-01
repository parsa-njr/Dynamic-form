"use client";

import { useSearchParams } from "next/navigation";

import CustomInput from "@/components/shared/CustomInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";

interface Option {
  display: string;
  value: string;
  priceFactor: number;
  isDefault: boolean;
  isDisabled: boolean;
  dependentFieldOptions?: Record<string, any>;
  dependentFields?: Field[];
}

interface ValidationRule {
  type: number;
  value: any;
  errorMessage: string | null;
  allowedFileTypes: string | null;
  maxFileSize: number;
}

interface Field {
  fieldId: string;
  label: string;
  inputType: string;
  required: boolean;
  defaultValue: string | null;
  order: number;
  description: string | null;
  enabled: boolean;
  isVisible: boolean;
  dependsOn: string | null;
  priceImpact: any;
  style: {
    width: string;
    placeholder: string | null;
    suffix: string | null;
  };
  options: Option[];
  validationRules: ValidationRule[];
  dependentFields?: Field[];
}

interface Section {
  title: string;
  description: string;
  collapsible: boolean;
  fields: Field[];
  order: number;
}

interface FormData {
  title: string;
  description: string;
  basePrice: number;
  currency: string;
  sections: Section[];
  priceRules: any[];
}

interface SelectedValues {
  [key: string]: string | undefined;
}

const FormLayout = () => {
  const searchParams = useSearchParams();
  const productGroupId = searchParams.get("productGroupId");
  const workTypeId = searchParams.get("workTypeId");

  useEffect(() => {
    if (productGroupId && workTypeId) {
      fetchData(productGroupId, workTypeId);
    }
  }, [productGroupId, workTypeId]);
  const [formData, setFormData] = useState({
    title: "ساک دستی متوسط",
    description: "",
    basePrice: 0,
    currency: "ریال",
    sections: [
      {
        title: "مشخصات اصلی",
        description: "لطفاً ابتدا سایز و تیراژ را مشخص کنید",
        collapsible: false,
        fields: [
          {
            fieldId: "size",
            label: "سایز",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "بزرگ",
                value: "70",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "کوچک",
                value: "71",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
          {
            fieldId: "Tirazh",
            label: "تیراژ",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "1000",
                value: "1000",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "2000",
                value: "2000",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
          {
            fieldId: "MaterialID",
            label: "جنس مصرفی",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "ساک دستی",
                value: "1051",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: [
                  {
                    fieldId: "material_1051_attribute",
                    label: "رنگ",
                    inputType: "Dropdown",
                    required: true,
                    defaultValue: null,
                    order: 5,
                    description: null,
                    enabled: true,
                    isVisible: true,
                    dependsOn: null,
                    priceImpact: null,
                    style: {
                      width: "100%",
                      placeholder: null,
                      suffix: null,
                    },
                    options: [
                      {
                        display: "انتخاب کنید",
                        value: "0",
                        priceFactor: 0,
                        isDefault: true,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "قرمز",
                        value: "1070",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: [
                          {
                            fieldId: "material_attribute_1070",
                            label: "سایز",
                            inputType: "Dropdown",
                            required: true,
                            defaultValue: null,
                            order: 5,
                            description: null,
                            enabled: true,
                            isVisible: true,
                            dependsOn: null,
                            priceImpact: null,
                            style: {
                              width: "100%",
                              placeholder: null,
                              suffix: null,
                            },
                            options: [
                              {
                                display: "انتخاب کنید",
                                value: "0",
                                priceFactor: 0,
                                isDefault: true,
                                isDisabled: false,
                                icon: null,
                                color: null,
                                description: null,
                                dependentFieldOptions: null,
                                dependentFields: null,
                              },
                              {
                                display: "کوچک",
                                value: "1072",
                                priceFactor: 0,
                                isDefault: false,
                                isDisabled: false,
                                icon: null,
                                color: null,
                                description: null,
                                dependentFieldOptions: null,
                                dependentFields: null,
                              },
                            ],
                            validationRules: [
                              {
                                type: 0,
                                value: null,
                                errorMessage: null,
                                allowedFileTypes: null,
                                maxFileSize: 0,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    validationRules: [
                      {
                        type: 0,
                        value: null,
                        errorMessage: null,
                        allowedFileTypes: null,
                        maxFileSize: 0,
                      },
                    ],
                  },
                ],
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
          {
            fieldId: "printKind",
            label: "نوع چاپ",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "تک رنگ",
                value: "1",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "دو رنگ",
                value: "2",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
          {
            fieldId: "Side",
            label: "وجه",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "OneSide",
                value: "OneSide",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "TwoSide",
                value: "TwoSide",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
        ],
        order: 1,
      },
      {
        title: "روکش",
        description: "روکش را انتخاب کنید .",
        collapsible: false,
        fields: [
          {
            fieldId: "adtCategory -3",
            label: "روکش",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 1,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "سلفون براق",
                value: "24",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: [
                  {
                    fieldId: "adt_24_Side",
                    label: "وجه سلفون براق",
                    inputType: "Dropdown",
                    required: true,
                    defaultValue: null,
                    order: 1,
                    description: null,
                    enabled: true,
                    isVisible: true,
                    dependsOn: null,
                    priceImpact: null,
                    style: {
                      width: "100%",
                      placeholder: null,
                      suffix: null,
                    },
                    options: [
                      {
                        display: "انتخاب کنید",
                        value: "0",
                        priceFactor: 0,
                        isDefault: true,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "یک رو",
                        value: "1",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "دو رو",
                        value: "2",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                    ],
                    validationRules: [
                      {
                        type: 0,
                        value: null,
                        errorMessage: null,
                        allowedFileTypes: null,
                        maxFileSize: 0,
                      },
                    ],
                  },
                ],
              },
              {
                display: "سلفون مات",
                value: "25",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: [
                  {
                    fieldId: "adt_25_Type",
                    label: "نوع سلفون مات",
                    inputType: "Dropdown",
                    required: true,
                    defaultValue: null,
                    order: 1,
                    description: null,
                    enabled: true,
                    isVisible: true,
                    dependsOn: null,
                    priceImpact: null,
                    style: {
                      width: "100%",
                      placeholder: null,
                      suffix: null,
                    },
                    options: [
                      {
                        display: "انتخاب کنید",
                        value: "0",
                        priceFactor: 0,
                        isDefault: true,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "نوع 1",
                        value: "142",
                        priceFactor: 0,
                        isDefault: true,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "نوع 2",
                        value: "143",
                        priceFactor: 0,
                        isDefault: true,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                    ],
                    validationRules: [
                      {
                        type: 0,
                        value: null,
                        errorMessage: null,
                        allowedFileTypes: null,
                        maxFileSize: 0,
                      },
                    ],
                  },
                  {
                    fieldId: "adt_25_Side",
                    label: "وجه سلفون مات",
                    inputType: "Dropdown",
                    required: true,
                    defaultValue: null,
                    order: 1,
                    description: null,
                    enabled: true,
                    isVisible: true,
                    dependsOn: null,
                    priceImpact: null,
                    style: {
                      width: "100%",
                      placeholder: null,
                      suffix: null,
                    },
                    options: [
                      {
                        display: "انتخاب کنید",
                        value: "0",
                        priceFactor: 0,
                        isDefault: true,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "یک رو",
                        value: "1",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "دو رو",
                        value: "2",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                    ],
                    validationRules: [
                      {
                        type: 0,
                        value: null,
                        errorMessage: null,
                        allowedFileTypes: null,
                        maxFileSize: 0,
                      },
                    ],
                  },
                ],
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
        ],
        order: 5,
      },
      {
        title: "خدمات جانبی",
        description: "در صورت نیاز خدمات های جانبی را انتخاب کنید.",
        collapsible: false,
        fields: [],
        order: 5,
      },
      {
        title: "کالاهای ترکیبی",
        description: "در صورت نیاز کالاهای ترکیبی را انتخاب کنید.",
        collapsible: false,
        fields: [
          {
            fieldId: "compoundGoods_1052",
            label: "تی شرت",
            inputType: "CheckBox",
            required: false,
            defaultValue: null,
            order: 1,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "true",
                value: "true",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: [
                  {
                    fieldId: "material_1052_attribute",
                    label: "رنگ",
                    inputType: "Dropdown",
                    required: true,
                    defaultValue: null,
                    order: 5,
                    description: null,
                    enabled: true,
                    isVisible: true,
                    dependsOn: null,
                    priceImpact: null,
                    style: {
                      width: "100%",
                      placeholder: null,
                      suffix: null,
                    },
                    options: [
                      {
                        display: "انتخاب کنید",
                        value: "0",
                        priceFactor: 0,
                        isDefault: true,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "قرمز",
                        value: "1074",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: [
                          {
                            fieldId: "material_attribute_1074",
                            label: "سایز",
                            inputType: "Dropdown",
                            required: true,
                            defaultValue: null,
                            order: 5,
                            description: null,
                            enabled: true,
                            isVisible: true,
                            dependsOn: null,
                            priceImpact: null,
                            style: {
                              width: "100%",
                              placeholder: null,
                              suffix: null,
                            },
                            options: [
                              {
                                display: "انتخاب کنید",
                                value: "0",
                                priceFactor: 0,
                                isDefault: true,
                                isDisabled: false,
                                icon: null,
                                color: null,
                                description: null,
                                dependentFieldOptions: null,
                                dependentFields: null,
                              },
                              {
                                display: "کوچک",
                                value: "1078",
                                priceFactor: 0,
                                isDefault: false,
                                isDisabled: false,
                                icon: null,
                                color: null,
                                description: null,
                                dependentFieldOptions: null,
                                dependentFields: [
                                  {
                                    fieldId: "material_attribute_1078",
                                    label: "مدل",
                                    inputType: "Dropdown",
                                    required: true,
                                    defaultValue: null,
                                    order: 5,
                                    description: null,
                                    enabled: true,
                                    isVisible: true,
                                    dependsOn: null,
                                    priceImpact: null,
                                    style: {
                                      width: "100%",
                                      placeholder: null,
                                      suffix: null,
                                    },
                                    options: [
                                      {
                                        display: "انتخاب کنید",
                                        value: "0",
                                        priceFactor: 0,
                                        isDefault: true,
                                        isDisabled: false,
                                        icon: null,
                                        color: null,
                                        description: null,
                                        dependentFieldOptions: null,
                                        dependentFields: null,
                                      },
                                      {
                                        display: "مدل A",
                                        value: "1083",
                                        priceFactor: 0,
                                        isDefault: false,
                                        isDisabled: false,
                                        icon: null,
                                        color: null,
                                        description: null,
                                        dependentFieldOptions: null,
                                        dependentFields: null,
                                      },
                                      {
                                        display: "مدل B",
                                        value: "1084",
                                        priceFactor: 0,
                                        isDefault: false,
                                        isDisabled: false,
                                        icon: null,
                                        color: null,
                                        description: null,
                                        dependentFieldOptions: null,
                                        dependentFields: null,
                                      },
                                    ],
                                    validationRules: [
                                      {
                                        type: 0,
                                        value: null,
                                        errorMessage: null,
                                        allowedFileTypes: null,
                                        maxFileSize: 0,
                                      },
                                    ],
                                  },
                                ],
                              },
                              {
                                display: "متوسط",
                                value: "1079",
                                priceFactor: 0,
                                isDefault: false,
                                isDisabled: false,
                                icon: null,
                                color: null,
                                description: null,
                                dependentFieldOptions: null,
                                dependentFields: [
                                  {
                                    fieldId: "material_attribute_1079",
                                    label: "مدل",
                                    inputType: "Dropdown",
                                    required: true,
                                    defaultValue: null,
                                    order: 5,
                                    description: null,
                                    enabled: true,
                                    isVisible: true,
                                    dependsOn: null,
                                    priceImpact: null,
                                    style: {
                                      width: "100%",
                                      placeholder: null,
                                      suffix: null,
                                    },
                                    options: [
                                      {
                                        display: "انتخاب کنید",
                                        value: "0",
                                        priceFactor: 0,
                                        isDefault: true,
                                        isDisabled: false,
                                        icon: null,
                                        color: null,
                                        description: null,
                                        dependentFieldOptions: null,
                                        dependentFields: null,
                                      },
                                      {
                                        display: "بزرگ",
                                        value: "1085",
                                        priceFactor: 0,
                                        isDefault: false,
                                        isDisabled: false,
                                        icon: null,
                                        color: null,
                                        description: null,
                                        dependentFieldOptions: null,
                                        dependentFields: null,
                                      },
                                      {
                                        display: "بسیار کوچک",
                                        value: "1086",
                                        priceFactor: 0,
                                        isDefault: false,
                                        isDisabled: false,
                                        icon: null,
                                        color: null,
                                        description: null,
                                        dependentFieldOptions: null,
                                        dependentFields: null,
                                      },
                                    ],
                                    validationRules: [
                                      {
                                        type: 0,
                                        value: null,
                                        errorMessage: null,
                                        allowedFileTypes: null,
                                        maxFileSize: 0,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                            validationRules: [
                              {
                                type: 0,
                                value: null,
                                errorMessage: null,
                                allowedFileTypes: null,
                                maxFileSize: 0,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        display: "آبی",
                        value: "1075",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: [
                          {
                            fieldId: "material_attribute_1075",
                            label: "سایز",
                            inputType: "Dropdown",
                            required: true,
                            defaultValue: null,
                            order: 5,
                            description: null,
                            enabled: true,
                            isVisible: true,
                            dependsOn: null,
                            priceImpact: null,
                            style: {
                              width: "100%",
                              placeholder: null,
                              suffix: null,
                            },
                            options: [
                              {
                                display: "انتخاب کنید",
                                value: "0",
                                priceFactor: 0,
                                isDefault: true,
                                isDisabled: false,
                                icon: null,
                                color: null,
                                description: null,
                                dependentFieldOptions: null,
                                dependentFields: null,
                              },
                              {
                                display: "کوچک",
                                value: "1080",
                                priceFactor: 0,
                                isDefault: false,
                                isDisabled: false,
                                icon: null,
                                color: null,
                                description: null,
                                dependentFieldOptions: null,
                                dependentFields: null,
                              },
                            ],
                            validationRules: [
                              {
                                type: 0,
                                value: null,
                                errorMessage: null,
                                allowedFileTypes: null,
                                maxFileSize: 0,
                              },
                            ],
                          },
                        ],
                      },
                    ],
                    validationRules: [
                      {
                        type: 0,
                        value: null,
                        errorMessage: null,
                        allowedFileTypes: null,
                        maxFileSize: 0,
                      },
                    ],
                  },
                ],
              },
            ],
            validationRules: [],
          },
        ],
        order: 5,
      },
      {
        title: "اطلاعات تحویل",
        description: "لطفاً نحوه تحویل سفارش خود را مشخص کنید",
        collapsible: false,
        fields: [
          {
            fieldId: "delivery_option",
            label: "نحوه تحویل",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 1,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "فوری",
                value: "40",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
        ],
        order: 4,
      },
      {
        title: "مشخصات نوع کار",
        description: "لطفاً نوع کارها را وارد میکنه ",
        collapsible: false,
        fields: [
          {
            fieldId: "workType",
            label: "نوع کار",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: null,
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
              {
                display: "دیجیتال",
                value: "1",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: {
                  printTest: {
                    isVisible: true,
                    isDisabled: false,
                    options: [
                      {
                        display: "چاپ رو",
                        value: "1",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "چاپ پشت",
                        value: "2",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "چاپ دورو",
                        value: "3",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                    ],
                  },
                  pageTest: {
                    isVisible: false,
                    isDisabled: true,
                    options: [
                      {
                        display: "یک صفحه",
                        value: "1",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "دو صفحه",
                        value: "2",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                    ],
                  },
                },
                dependentFields: null,
              },
              {
                display: "افست",
                value: "2",
                priceFactor: 0,
                isDefault: false,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: {
                  printTest: {
                    isVisible: true,
                    isDisabled: false,
                    options: [
                      {
                        display: "چاپ سه رو",
                        value: "1",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                    ],
                  },
                  pageTest: {
                    isVisible: false,
                    isDisabled: true,
                    options: [
                      {
                        display: "بیست صفحه",
                        value: "1",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                      {
                        display: "چهل صفحه",
                        value: "2",
                        priceFactor: 0,
                        isDefault: false,
                        isDisabled: false,
                        icon: null,
                        color: null,
                        description: null,
                        dependentFieldOptions: null,
                        dependentFields: null,
                      },
                    ],
                  },
                },
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
          {
            fieldId: "printTest",
            label: "وجه پرینتی",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: "workType",
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
          {
            fieldId: "pageTest",
            label: "تعداد صفحه",
            inputType: "Dropdown",
            required: true,
            defaultValue: null,
            order: 4,
            description: null,
            enabled: true,
            isVisible: true,
            dependsOn: "workType",
            priceImpact: null,
            style: {
              width: "100%",
              placeholder: null,
              suffix: null,
            },
            options: [
              {
                display: "انتخاب کنید",
                value: "0",
                priceFactor: 0,
                isDefault: true,
                isDisabled: false,
                icon: null,
                color: null,
                description: null,
                dependentFieldOptions: null,
                dependentFields: null,
              },
            ],
            validationRules: [
              {
                type: 0,
                value: null,
                errorMessage: null,
                allowedFileTypes: null,
                maxFileSize: 0,
              },
            ],
          },
        ],
        order: 10,
      },
    ],
    priceRules: [],
  });
  const [selectedValues, setSelectedValues] = useState<SelectedValues>({});

  const fetchData = async (param1: string, param2: string) => {
    try {
      const response = await fetch(
        `https://cloud.rangarang-group.com/api/Order/GetForm?productGroupId=${encodeURIComponent(
          param1
        )}&workTypeId=${encodeURIComponent(param2)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setFormData(data);
      // console.log("data :::: ", data);
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  };

  const handleChange = (fieldId: string, value: string) => {
    setSelectedValues((prev) => {
      const updatedValues = {
        ...prev,
        [fieldId]: value,
      };

      const field = formData.sections
        .flatMap((section) => section.fields)
        .find((f) => f.fieldId === fieldId);

      const selectedOption = field?.options.find(
        (option) => option.value === value
      );

      if (selectedOption?.dependentFields) {
        selectedOption.dependentFields.forEach((dependentField) => {
          updatedValues[dependentField.fieldId] =
            dependentField.defaultValue || "";
        });
      }

      if (
        selectedOption?.dependentFieldOptions &&
        typeof selectedOption.dependentFieldOptions === "object"
      ) {
        setFormData((prevFormData) => {
          const newSections = prevFormData.sections.map((section) => ({
            ...section,
            fields: section.fields.map((f) => {
              const updatedFieldOption =
                selectedOption.dependentFieldOptions[f.fieldId];

              if (updatedFieldOption) {
                return {
                  ...f,
                  options: updatedFieldOption.options || [],
                  isVisible: updatedFieldOption.isVisible ?? f.isVisible,
                  isDisabled: updatedFieldOption.isDisabled ?? f.isDisabled,
                };
              }
              return f;
            }),
          }));

          return { ...prevFormData, sections: newSections };
        });
      }

      return updatedValues;
    });
  };

  const renderFields = (fields: Field[]) => {
    return fields.map((field) => {
      const { fieldId, label, inputType, options } = field;
      const selectedOption = options?.find(
        (option) => option?.value === selectedValues[fieldId]?.toString()
      );

      return (
        <div key={fieldId} className="mb-4">
          <CustomInput
            type={inputType?.toLowerCase()}
            label={label}
            defaultValue={
              options?.find((item) => item?.isDefault)?.value.toString() || ""
            }
            options={options.map((option) => ({
              value: option?.value,
              label: option?.display,
            }))}
            onChange={(value) => handleChange(fieldId, value)}
          />

          {selectedOption?.dependentFields &&
            selectedOption?.dependentFields?.length > 0 &&
            renderFields(selectedOption?.dependentFields)}
        </div>
      );
    });
  };

  return (
    <div className="bg-red w-full md:w-[30%]">
      <div className="text-[17px] font-bold mb-5 text-right text-[#7E7D84]">
        {formData?.title}
      </div>
      {formData?.sections.map((section) =>
        section?.fields?.length > 0 ? (
          <div key={section.title} className="section mb-5">
            <h2 className="text-[14px] text-[#6c757d] font-semibold mb-3">
              {section?.title}
            </h2>
            {renderFields(section?.fields)}
          </div>
        ) : null
      )}
    </div>
  );
};

export default FormLayout;
