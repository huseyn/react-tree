import React from "react";
import styled from "styled-components";
import { Levels } from "./constants";

const TreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .tree-node {
    margin-left: ${(props) => (props.level - 1) * 40}px;
    margin-bottom: 11px;
  }
  align-items: flex-start;
`;

const TreeNodeLabels = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4px;
`;

const TreeNodeLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  cursor: pointer;

  .mr-1 {
    margin-left: 8px;
  }
`;

const TreeNodeDescription = styled.div`
  display: flex;
  align-items: center;
  width: 1063px;
  height: 72px;
  background-color: #f2f2f2;

  .description__left-border {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 100%;
    background-color: #1c90fd;
    margin-right: 20px;

    span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 4px;
      background-color: #fff;
      margin-bottom: 4px;
    }
  }

  .description__info {
    display: flex;
    flex-direction: column;
    padding: 8px 0;

    &__label {
      margin-bottom: 12px;
      color: #000;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 1.2px;
      text-transform: uppercase;
    }
  }

  .description__toolbar {
    margin-left: auto;

    &__icons {
      display: flex;

      .description__toolbar__icon {
        margin-right: 3px;
      }
    }
  }
`;

const TreeNode = ({ node }) => {
  return (
    <TreeWrapper level={node.level}>
      <div className="tree-node">
        <TreeNodeLabels>
          {node.level === Levels.FIRST ? (
            <TreeNodeLabel onClick={() => console.log(node)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.7 3.15514C7.7 2.76854 7.38661 2.45514 7 2.45514C6.61339 2.45514 6.3 2.76854 6.3 3.15514V6.3H3.15865C2.77205 6.3 2.45865 6.61339 2.45865 7C2.45865 7.38661 2.77205 7.7 3.15865 7.7H6.3V10.8227C6.3 11.2093 6.61339 11.5227 7 11.5227C7.38661 11.5227 7.7 11.2093 7.7 10.8227V7.7H10.8262C11.2128 7.7 11.5262 7.38661 11.5262 7C11.5262 6.61339 11.2128 6.3 10.8262 6.3H7.7V3.15514ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7Z"
                  fill="#0F4C75"
                />
              </svg>
              <span className="mr-1">{node.description.label}</span>
            </TreeNodeLabel>
          ) : (
            <TreeNodeDescription>
              <div className="description__left-border">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="description__info">
                <span className="description__info__label">
                  {node.description.label}
                </span>
                <span>{node.description.text}</span>
              </div>
              <div className="description__toolbar">
                <div className="description__toolbar__icons">
                  <div className="description__toolbar__icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1668_32690)">
                        <path
                          d="M13.9286 5.35714C14.2127 5.35714 14.4853 5.24426 14.6862 5.04333C14.8871 4.8424 15 4.56987 15 4.28571V1.07143C15 0.787268 14.8871 0.514746 14.6862 0.313814C14.4853 0.112882 14.2127 0 13.9286 0H1.07143C0.787268 0 0.514746 0.112882 0.313814 0.313814C0.112882 0.514746 0 0.787268 0 1.07143V4.28571C0 4.56987 0.112882 4.8424 0.313814 5.04333C0.514746 5.24426 0.787268 5.35714 1.07143 5.35714H6.96429V7.5H3.75C3.46584 7.5 3.19332 7.61288 2.99239 7.81381C2.79145 8.01475 2.67857 8.28727 2.67857 8.57143V10.7143H1.07143C0.787268 10.7143 0.514746 10.8272 0.313814 11.0281C0.112882 11.229 0 11.5016 0 11.7857V13.9286C0 14.2127 0.112882 14.4853 0.313814 14.6862C0.514746 14.8871 0.787268 15 1.07143 15H5.35714C5.6413 15 5.91383 14.8871 6.11476 14.6862C6.31569 14.4853 6.42857 14.2127 6.42857 13.9286V11.7857C6.42857 11.5016 6.31569 11.229 6.11476 11.0281C5.91383 10.8272 5.6413 10.7143 5.35714 10.7143H3.75V8.57143H11.25V10.7143H9.64286C9.3587 10.7143 9.08617 10.8272 8.88524 11.0281C8.68431 11.229 8.57143 11.5016 8.57143 11.7857V13.9286C8.57143 14.2127 8.68431 14.4853 8.88524 14.6862C9.08617 14.8871 9.3587 15 9.64286 15H13.9286C14.2127 15 14.4853 14.8871 14.6862 14.6862C14.8871 14.4853 15 14.2127 15 13.9286V11.7857C15 11.5016 14.8871 11.229 14.6862 11.0281C14.4853 10.8272 14.2127 10.7143 13.9286 10.7143H12.3214V8.57143C12.3214 8.28727 12.2085 8.01475 12.0076 7.81381C11.8067 7.61288 11.5342 7.5 11.25 7.5H8.03571V5.35714H13.9286ZM5.35714 13.9286H1.07143V11.7857H5.35714V13.9286ZM13.9286 13.9286H9.64286V11.7857H13.9286V13.9286ZM1.07143 1.07143H13.9286V4.28571H1.07143V1.07143Z"
                          fill="#595959"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1668_32690">
                          <rect
                            width="15"
                            height="15"
                            fill="white"
                            transform="translate(15 15) rotate(-180)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="description__toolbar__icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1668_30901)">
                        <path
                          d="M3.8625 7.6081C3.9796 7.49926 4.13801 7.43818 4.30313 7.43818C4.46824 7.43818 4.62665 7.49926 4.74375 7.6081C4.86016 7.71758 4.9255 7.86568 4.9255 8.02006C4.9255 8.17443 4.86016 8.32253 4.74375 8.43202L2.375 10.6467H13.75V0.584339C13.75 0.429363 13.8158 0.280734 13.9331 0.171149C14.0503 0.0615641 14.2092 0 14.375 0C14.5408 0 14.6997 0.0615641 14.8169 0.171149C14.9342 0.280734 15 0.429363 15 0.584339V10.6467C15 10.9566 14.8683 11.2539 14.6339 11.473C14.3995 11.6922 14.0815 11.8153 13.75 11.8153H2.40625L4.74375 14.0066C4.86016 14.1161 4.9255 14.2642 4.9255 14.4186C4.9255 14.5729 4.86016 14.721 4.74375 14.8305C4.62734 14.9385 4.47021 14.9993 4.30625 15C4.224 15.0004 4.14246 14.9857 4.06631 14.9566C3.99016 14.9275 3.9209 14.8847 3.8625 14.8305L0 11.231L3.8625 7.6081Z"
                          fill="#595959"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1668_30901">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="description__toolbar__icon">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1668_30906)">
                        <path
                          d="M7.5 14.0625C9.24048 14.0625 10.9097 13.3711 12.1404 12.1404C13.3711 10.9097 14.0625 9.24048 14.0625 7.5C14.0625 5.75952 13.3711 4.09032 12.1404 2.85961C10.9097 1.6289 9.24048 0.9375 7.5 0.9375C5.75952 0.9375 4.09032 1.6289 2.85961 2.85961C1.6289 4.09032 0.9375 5.75952 0.9375 7.5C0.9375 9.24048 1.6289 10.9097 2.85961 12.1404C4.09032 13.3711 5.75952 14.0625 7.5 14.0625ZM7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0ZM8.20312 2.8125C8.20312 2.99898 8.12905 3.17782 7.99718 3.30968C7.86532 3.44155 7.68648 3.51562 7.5 3.51562C7.31352 3.51562 7.13468 3.44155 7.00282 3.30968C6.87095 3.17782 6.79688 2.99898 6.79688 2.8125C6.79688 2.62602 6.87095 2.44718 7.00282 2.31532C7.13468 2.18345 7.31352 2.10938 7.5 2.10938C7.68648 2.10938 7.86532 2.18345 7.99718 2.31532C8.12905 2.44718 8.20312 2.62602 8.20312 2.8125ZM6.5625 10.3125C6.5625 10.5611 6.66127 10.7996 6.83709 10.9754C7.0129 11.1512 7.25136 11.25 7.5 11.25C7.74864 11.25 7.9871 11.1512 8.16291 10.9754C8.33873 10.7996 8.4375 10.5611 8.4375 10.3125C8.4375 10.0639 8.33873 9.8254 8.16291 9.64959C7.9871 9.47377 7.74864 9.375 7.5 9.375C7.25136 9.375 7.0129 9.47377 6.83709 9.64959C6.66127 9.8254 6.5625 10.0639 6.5625 10.3125ZM5.625 10.3125C5.625 9.27832 6.46582 8.4375 7.5 8.4375C8.0127 8.4375 8.47852 8.64258 8.81543 8.97656L11.9473 7.09863C12.1699 6.9668 12.457 7.03711 12.5918 7.25977C12.7266 7.48242 12.6533 7.76953 12.4307 7.9043L9.29883 9.7793C9.34863 9.94922 9.375 10.1279 9.375 10.3125C9.375 11.3467 8.53418 12.1875 7.5 12.1875C6.46582 12.1875 5.625 11.3467 5.625 10.3125ZM11.4844 4.21875C11.4844 4.40523 11.4103 4.58407 11.2784 4.71593C11.1466 4.8478 10.9677 4.92188 10.7812 4.92188C10.5948 4.92188 10.4159 4.8478 10.2841 4.71593C10.1522 4.58407 10.0781 4.40523 10.0781 4.21875C10.0781 4.03227 10.1522 3.85343 10.2841 3.72157C10.4159 3.5897 10.5948 3.51562 10.7812 3.51562C10.9677 3.51562 11.1466 3.5897 11.2784 3.72157C11.4103 3.85343 11.4844 4.03227 11.4844 4.21875ZM2.8125 6.79688C2.99898 6.79688 3.17782 6.87095 3.30968 7.00282C3.44155 7.13468 3.51562 7.31352 3.51562 7.5C3.51562 7.68648 3.44155 7.86532 3.30968 7.99718C3.17782 8.12905 2.99898 8.20312 2.8125 8.20312C2.62602 8.20312 2.44718 8.12905 2.31532 7.99718C2.18345 7.86532 2.10938 7.68648 2.10938 7.5C2.10938 7.31352 2.18345 7.13468 2.31532 7.00282C2.44718 6.87095 2.62602 6.79688 2.8125 6.79688ZM4.92188 4.21875C4.92188 4.40523 4.8478 4.58407 4.71593 4.71593C4.58407 4.8478 4.40523 4.92188 4.21875 4.92188C4.03227 4.92188 3.85343 4.8478 3.72157 4.71593C3.5897 4.58407 3.51562 4.40523 3.51562 4.21875C3.51562 4.03227 3.5897 3.85343 3.72157 3.72157C3.85343 3.5897 4.03227 3.51562 4.21875 3.51562C4.40523 3.51562 4.58407 3.5897 4.71593 3.72157C4.8478 3.85343 4.92188 4.03227 4.92188 4.21875Z"
                          fill="#595959"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1668_30906">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="description__toolbar__icon">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1668_30912)">
                        <path
                          d="M8.23145 6.0498H11.5127"
                          stroke="#595959"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.4873 6.0498L4.95605 6.51855L6.3623 5.1123"
                          stroke="#595959"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.23145 10.4248H11.5127"
                          stroke="#595959"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.4873 10.4248L4.95605 10.8936L6.3623 9.4873"
                          stroke="#595959"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.500204 15.5H15.5V0.5L0.5 0.500023L0.500204 15.5Z"
                          stroke="#595959"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1668_30912">
                          <rect
                            width="15"
                            height="15"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="description__toolbar__icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9969 13.0031C10.7234 12.7297 10.4117 12.5082 10.0726 12.3441C10.8957 8.9996 12.356 7.36975 13.7807 6.58764C15.2438 5.78366 16.8271 5.78366 18.0085 5.99149C18.2163 7.17286 18.2191 8.75622 17.4124 10.2193C16.6302 11.644 15.0004 13.1043 11.6559 13.9274C11.4918 13.5883 11.2703 13.2739 10.9969 13.0031ZM12.0005 15.426C12.0005 15.2018 11.9786 14.9803 11.9349 14.7615C12.9686 14.5017 13.86 14.179 14.6258 13.8126V16.003C14.6258 16.3339 14.4398 16.6375 14.1417 16.7851L12.0005 17.8544V15.4233V15.426ZM15.5008 16.003V13.3395C19.1024 11.1545 19.2336 7.80183 18.8563 5.76725C18.7961 5.45003 18.55 5.20118 18.2328 5.14375C16.1982 4.76637 12.8455 4.89763 10.6605 8.49916H7.99696C7.33518 8.49916 6.72809 8.87381 6.43275 9.46723L5.04628 12.2402C4.97791 12.3769 4.98612 12.5382 5.06542 12.6668C5.14473 12.7953 5.28693 12.8746 5.43733 12.8746H8.57398C9.24943 12.8746 9.90028 13.1426 10.3761 13.6212C10.8519 14.0997 11.1227 14.7478 11.1227 15.4233V18.5627C11.1227 18.7131 11.202 18.8553 11.3305 18.9346C11.459 19.0139 11.6204 19.0221 11.7571 18.9537L14.5328 17.5673C15.1262 17.2719 15.5008 16.6648 15.5008 16.003ZM9.23849 12.0651C9.02246 12.0214 8.79822 11.9995 8.57398 11.9995H6.14561L7.21486 9.85828C7.36253 9.56294 7.66607 9.37425 7.99696 9.37425H10.1874C9.81824 10.14 9.49829 11.0287 9.23849 12.0651ZM8.93221 17.2336C8.6314 17.5344 8.12823 17.7641 7.49379 17.9146C6.93045 18.0486 6.3425 18.1005 5.88035 18.1169C5.89676 17.652 5.94871 17.0668 6.08271 16.5035C6.23312 15.869 6.46283 15.3659 6.76364 15.0651C7.36253 14.4662 8.33333 14.4662 8.93221 15.0651C9.5311 15.6639 9.5311 16.6347 8.93221 17.2336ZM9.55298 17.8517C10.4937 16.9109 10.4937 15.3877 9.55298 14.447C8.61226 13.5063 7.08906 13.5063 6.14834 14.447C5.21036 15.3823 5.02714 17.1953 5.00253 18.2263C4.99159 18.6638 5.33615 19.0084 5.7737 18.9975C6.80466 18.9729 8.61773 18.7896 9.55298 17.8517ZM15.7196 8.93671C15.7196 9.11077 15.6505 9.27771 15.5274 9.40079C15.4043 9.52387 15.2374 9.59302 15.0633 9.59302C14.8892 9.59302 14.7223 9.52387 14.5992 9.40079C14.4761 9.27771 14.407 9.11077 14.407 8.93671C14.407 8.76264 14.4761 8.5957 14.5992 8.47262C14.7223 8.34954 14.8892 8.28039 15.0633 8.28039C15.2374 8.28039 15.4043 8.34954 15.5274 8.47262C15.6505 8.5957 15.7196 8.76264 15.7196 8.93671ZM15.0633 7.4053C14.8622 7.4053 14.6631 7.44491 14.4773 7.52187C14.2915 7.59883 14.1226 7.71164 13.9804 7.85384C13.8382 7.99604 13.7254 8.16486 13.6485 8.35066C13.5715 8.53646 13.5319 8.7356 13.5319 8.93671C13.5319 9.13781 13.5715 9.33695 13.6485 9.52275C13.7254 9.70855 13.8382 9.87737 13.9804 10.0196C14.1226 10.1618 14.2915 10.2746 14.4773 10.3515C14.6631 10.4285 14.8622 10.4681 15.0633 10.4681C15.2644 10.4681 15.4635 10.4285 15.6493 10.3515C15.8351 10.2746 16.004 10.1618 16.1462 10.0196C16.2884 9.87737 16.4012 9.70855 16.4781 9.52275C16.5551 9.33695 16.5947 9.13781 16.5947 8.93671C16.5947 8.7356 16.5551 8.53646 16.4781 8.35066C16.4012 8.16486 16.2884 7.99604 16.1462 7.85384C16.004 7.71164 15.8351 7.59883 15.6493 7.52187C15.4635 7.44491 15.2644 7.4053 15.0633 7.4053Z"
                        fill="#595959"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </TreeNodeDescription>
          )}
          {node.childLabel && (
            <TreeNodeLabel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.7 3.15514C7.7 2.76854 7.38661 2.45514 7 2.45514C6.61339 2.45514 6.3 2.76854 6.3 3.15514V6.3H3.15865C2.77205 6.3 2.45865 6.61339 2.45865 7C2.45865 7.38661 2.77205 7.7 3.15865 7.7H6.3V10.8227C6.3 11.2093 6.61339 11.5227 7 11.5227C7.38661 11.5227 7.7 11.2093 7.7 10.8227V7.7H10.8262C11.2128 7.7 11.5262 7.38661 11.5262 7C11.5262 6.61339 11.2128 6.3 10.8262 6.3H7.7V3.15514ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7Z"
                  fill="#0F4C75"
                />
              </svg>
              <span className="mr-1">{node.childLabel}</span>
            </TreeNodeLabel>
          )}
        </TreeNodeLabels>
      </div>
      {node.children &&
        node.children.map((child) => <TreeNode key={child.id} node={child} />)}
    </TreeWrapper>
  );
};

const Tree = ({ data }) => {
  return (
    <div>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </div>
  );
};

export default Tree;